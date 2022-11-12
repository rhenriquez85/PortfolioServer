FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install pm2 -g

COPY . .

ENV NODE_PORT=80

EXPOSE $NODE_PORT

CMD ["pm2-runtime", "server.js"]