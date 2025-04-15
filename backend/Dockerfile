# Use the latest Node.js image as the base image
FROM node:latest

WORKDIR /app

COPY package.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code into the container
COPY . .

# Expose port 8000 (or the port your app listens on)
EXPOSE 8000

CMD ["node", "server.js"]
