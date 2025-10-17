# ---------- 1. Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy only the dependency manifests first for caching
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Next.js app
RUN npm run build

# ---------- 2. Production stage ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Disable Next telemetry in containers
ENV NEXT_TELEMETRY_DISABLED=1

# Copy the build output from the builder image
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production deps
RUN npm install --omit=dev

# Expose port 3000 and run
EXPOSE 3000
CMD ["npm", "start"]