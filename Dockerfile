FROM node:20

RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN pnpm install

# Copy the entire project directory to the container
COPY . .