FROM node:20.10.0-alpine
WORKDIR /client
EXPOSE 80
COPY . . 
RUN npm install
ENTRYPOINT [ "npm", "start" ]
