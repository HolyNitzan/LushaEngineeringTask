FROM node:15.14
WORKDIR /service
COPY package.json ./
RUN yarn 
COPY . .
RUN yarn  build
CMD [ "yarn", "start" ]
