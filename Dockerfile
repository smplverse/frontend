FROM node:latest

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "start"]
