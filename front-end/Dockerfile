FROM node:16

RUN echo "\n\n** We are runing the front-end image **\n"

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app