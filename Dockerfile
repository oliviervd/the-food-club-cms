# -------- Base Image --------
FROM node:18.20.2-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# -------- Dependencies Layer --------
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# -------- Build Layer --------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build step for Payload (includes Next.js build, if used)
RUN yarn build

# -------- Runtime Layer --------
FROM base AS runtime
WORKDIR /app

COPY package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/.next ./.next

ENV PAYLOAD_CONFIG_PATH=src/app/(payload)/payload.config.ts

EXPOSE 3000

CMD ["yarn", "start"]