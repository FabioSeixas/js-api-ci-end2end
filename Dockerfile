FROM node:14-alpine

WORKDIR /src

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3001
