# Use an official Node.js image as the base image
FROM node:20-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json or yarn.lock
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]