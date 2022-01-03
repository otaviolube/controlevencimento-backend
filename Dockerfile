FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=dev

EXPOSE 3000

CMD [ "node", "./src/server.js" ]