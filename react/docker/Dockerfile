# pull official base image
FROM node:14.17.1-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
COPY app/package.json ./
COPY app/yarn.lock ./
RUN yarn install --silent --modules-folder ../node_modules # for prod
#RUN yarn install --silent
RUN yarn global add expo-cli

# add app
#COPY ./app ./ for prod

# start app
CMD ["yarn", "web"]