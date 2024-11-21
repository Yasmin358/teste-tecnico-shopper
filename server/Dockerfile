FROM node:20.10.0-alpine
WORKDIR /server
EXPOSE 8080
COPY package.json package-lock*.json ./
RUN npm install
ENTRYPOINT [ "npm", "run", "dev" ]