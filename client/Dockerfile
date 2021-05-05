FROM node:15.14-alpine as web_app
WORKDIR /app
COPY package.json ./
RUN yarn 
COPY . .
RUN yarn  build

FROM caddy:2.3.0-alpine
COPY --from=web_app /app/build /usr/share/caddy/

