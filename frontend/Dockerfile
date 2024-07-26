#Frontend Dockerfile

FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm install -g serve

EXPOSE 5000

CMD ["server", "-s", "build"]
