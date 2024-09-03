# Dockerfile
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "src/app.js"]
