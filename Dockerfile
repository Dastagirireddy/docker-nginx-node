FROM node:latest

# Create app directory
RUN mkdir -p /myapp

RUN npm install -g supervisor

WORKDIR /myapp

# Install app dependencies
COPY package.json /myapp
RUN npm install --production

# Bundle app source
COPY . /myapp/src

WORKDIR /myapp/src

CMD [ "npm", "start" ]

EXPOSE 3000
