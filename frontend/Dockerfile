#Frontend Dockerfile

FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm install -g serve

EXPOSE 3001

CMD ["server", "-s", "build"]
