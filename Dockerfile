# ---- Base image ----
FROM node:18.8-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# ---- Dependencies layer ----
FROM base AS deps
COPY package.json ./
RUN pnpm install --frozen-lockfile

# ---- Build layer ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# ---- Runtime layer ----
FROM base AS runtime
WORKDIR /app

# Copy necessary files to runtime image
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY package.json ./

# ENV for Payload config (if needed)
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

EXPOSE 3000
CMD ["cross-env", "NODE_OPTIONS=--no-deprecation", "next", "start"]