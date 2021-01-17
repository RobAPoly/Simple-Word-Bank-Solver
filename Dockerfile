FROM node:14.15.4
ADD . /frontEnd
WORKDIR /frontEnd

# add `/app/node_modules/.bin` to $PATH
ENV PATH /frontEnd/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@11.0.6
EXPOSE 4200
RUN ng serve 