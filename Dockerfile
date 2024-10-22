# Use the official Node.js image as the base image
FROM node:18-alpine
# Set the working directory in the container
WORKDIR /application

# Copy only the package.json and package-lock.json (or yarn.lock)
# This helps in taking advantage of Docker's caching mechanism
COPY package.json package-lock.json* ./ 

# Install the dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Expose port 3000 for the Next.js application
EXPOSE 3000

# Default command to start the Next.js dev server
CMD ["npm", "run", "dev"]
