# ---- Base image ----
FROM node:18.8-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# ---- Dependencies layer ----
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ---- Build layer ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# ---- Runtime layer ----
FROM base AS runtime
WORKDIR /app

# Copy only what's needed
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

EXPOSE 3000
CMD ["yarn", "start"]