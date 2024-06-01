FROM node:14

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package*.json ./

COPY .env ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
