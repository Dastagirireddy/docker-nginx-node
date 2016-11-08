FROM node:latest

# Create app directory
RUN mkdir -p /myapp

WORKDIR /myapp

# Install app dependencies
COPY package.json /myapp
RUN npm install

# Bundle app source
COPY . /myapp

CMD [ "npm", "start" ]

EXPOSE 3000
