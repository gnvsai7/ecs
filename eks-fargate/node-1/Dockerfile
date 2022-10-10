FROM node:latest
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install express
COPY index.js .
EXPOSE 80
CMD ["node", "index.js"]