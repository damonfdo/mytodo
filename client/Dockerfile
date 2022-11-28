# REF https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:16

#Creating a App Directory
WORKDIR /usr/src/frontend


# COPY package.json file to WORKDIR  
COPY package*.json ./
# Copy source code  
COPY . .


# NPM INSTALL 
RUN npm install
RUN npm install serve -g
RUN npm run build





EXPOSE 3000

CMD ["npm", "run", "serve"]