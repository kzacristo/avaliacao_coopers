#Dockerfile backend
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

RUN npm install mysql2

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]

