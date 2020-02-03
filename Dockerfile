FROM node:12.13.0

# Create app directory
RUN mkdir -p /opt/marvel-frontend

WORKDIR /opt/marvel-frontend
# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000

CMD ["npm", "start"]

