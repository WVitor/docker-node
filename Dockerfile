FROM node:lts
WORKDIR /usr/src/app
COPY ./node/ ./
env PORT=3001
RUN npm install
EXPOSE 3001
CMD [ "npm", "run", "prod"]