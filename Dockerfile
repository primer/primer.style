FROM mhart/alpine-node:10
WORKDIR /usr/src
COPY package.json package-lock.json /usr/src/
RUN npm ci
COPY . .
RUN npm run build

# Now serves the contents of the `/public` directory for "static" deployments
RUN mv /usr/src/docs /public
