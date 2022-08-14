FROM node:16.16.0

WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci --production --legacy-peer-deps

# Build the application and migrate the database
RUN npm run build
RUN npm run migrate

# Expose the application on port 3000
EXPOSE 3000

# Run the application
RUN npm run start
