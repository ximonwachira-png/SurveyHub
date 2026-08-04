# Dockerfile for SurveyHub

# Build image using the repository root as context so the server can serve the public/ folder.
FROM node:18-alpine

WORKDIR /app

# Install server dependencies
COPY server/package*.json ./server/
RUN cd server && npm ci --only=production

# Copy the rest of the repo
COPY . .

WORKDIR /app/server
ENV PORT=3000
EXPOSE 3000

CMD ["node", "index.js"]
