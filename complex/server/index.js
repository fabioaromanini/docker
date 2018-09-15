const keys = require('./keys');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// pg config
const { Pool } = require('pg');
const pgClient = new Pool({
	host: keys.pgHost,
	database: keys.pgDatabase,
	port: keys.pgPort,
	user: keys.pgUser,
	password: keys.pgPassword
});
pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
	.query('CREATE TABLE IF NOT EXISTS values (number INT)')
	.catch(err => console.log(err));

// redis config
const redis = require('redis');
const redisClient = redis.createClient({
	host: keys.redisHost,
	port: keys.redisPort,
	retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();

// routes
app.get('/', (req, res) => {
	res.send('hi');
});

app.get('/values/all', async (req, res) => {
	const values = await pgClient.query('SELECT * FROM values');
	res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
	redisClient.hgetall('values', (err, values) => {
		res.send(values);
	});
});

app.post('/values', async (req, res) => {
	const index = req.body.index;

	if (parseInt(index) > 40) {
		return res.status(422).send('Index too high');
	}

	redisClient.hset('values', index, 'null');
	redisPublisher.publish('insert', index);
	pgClient.query('INSERT INTO values (number) VALUES ($1) ', [index]);
});

app.listen(5000, () => {
	console.log('Listening on port 5000');
});
