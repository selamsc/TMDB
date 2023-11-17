FROM node:18.18-alpine3.17

WORKDIR /usr/src

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


CMD ["node", "dist/main"]
