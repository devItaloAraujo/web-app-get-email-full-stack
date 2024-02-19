FROM node:16.14

RUN mkdir -p /app && chown -R node:node /app
USER node

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["npm", "run", "db:create"]
