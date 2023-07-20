# This Dockerfile allows you to run Astro in a static container (no server side)

#########
# Build #
#########
FROM docker.io/node:20-alpine as BUILD_IMAGE

# run as non root user
USER node

# go to user repository
WORKDIR /home/node

# Add package json
ADD --chown=node:node package.json package-lock.json ./

# install dependencies from package lock
RUN npm ci

# Add project files
ADD --chown=node:node . .

# build
RUN npm run build

##############
# Production #
##############
FROM docker.io/nginx:1-alpine

# go to NGINX folder
WORKDIR /usr/share/nginx/html

# Copy the nginx config
ADD ./.docker/nginx.conf /etc/nginx/nginx.conf

# Copy dist fro mthe build image
COPY --from=BUILD_IMAGE /home/node/dist ./
