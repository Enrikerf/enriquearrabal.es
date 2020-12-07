FROM node:lts-alpine

RUN yarn global add @vue/cli

RUN mkdir /var/www /var/www/web

# ADD app/package.json /var/www/web/

WORKDIR /var/www/web

# --prefix to install node_modules inside the container and not mixup with de volume in app
# RUN yarn install --prefix ./node_modules

# RUN npm run serve

# CMD [ "npm", "run", "serve" ]