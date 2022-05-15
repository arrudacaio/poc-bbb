FROM node:12.18.4-alpine3.11  

# App directory
WORKDIR /app 

# Ensure package.json  are copied where available
COPY package.json ./


# Install app dependencies
RUN npm install 

COPY . .


# Expose PORT 
EXPOSE 3000

# Run app in docker
CMD ["npm", "run", "dev:server"]



