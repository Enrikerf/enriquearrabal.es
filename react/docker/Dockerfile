# pull official base image
FROM node:14.17.1-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY app/package.json ./
COPY app/yarn.lock ./
RUN yarn install --silent --modules-folder ../node_modules
RUN yarn global add react-scripts@3.4.1 --silent

# add app
COPY ./app ./

# start app
CMD ["yarn", "start"]