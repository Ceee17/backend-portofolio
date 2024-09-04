# Dockerfile
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose the port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
