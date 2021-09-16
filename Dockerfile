FROM node:14.17.6

COPY . /backend

WORKDIR /backend

RUN ls

RUN npm i

EXPOSE 5000

CMD [ "npm", "start"]