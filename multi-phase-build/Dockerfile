FROM node:alpine AS build_phase

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

CMD "sh"