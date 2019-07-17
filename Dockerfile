FROM node:10.15.3-alpine

RUN mkdir -p /var/app/

ADD *.json /var/app/

WORKDIR /var/app

RUN npm install

COPY . /var/app

EXPOSE 3000

CMD ["npm", "start"]
