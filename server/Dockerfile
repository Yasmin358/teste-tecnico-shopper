FROM node:20.10.0-alpine
WORKDIR /server
EXPOSE 8080
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "run"]