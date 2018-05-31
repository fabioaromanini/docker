FROM alpine:latest
RUN apk add --update nodejs
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 8080
CMD ["node", "/usr/src/app/app.js"]
