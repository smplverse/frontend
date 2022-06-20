FROM node:current-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

FROM node:current-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:current-alpine as runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/build ./
RUN npm i -g serve
EXPOSE 3000

CMD ["serve", "build", "-l", "3000"]
