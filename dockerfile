FROM node:lts-alpine

WORKDIR /usr/app
COPY . .

ARG PORT=80
ENV PORT=$PORT

RUN yarn install

CMD ["yarn", "start"]