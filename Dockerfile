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

   # Add a non-root user for better security
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 payload

   ENV PAYLOAD_CONFIG_PATH=src/payload.config.ts
   ENV NEXT_TELEMETRY_DISABLED 1  # Disable Next.js telemetry if used

   # Copy only production essentials
   COPY package.json ./
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/src ./src
   COPY --from=builder /app/.next ./.next

   USER payload  # Run as non-root user

   EXPOSE 3000

   CMD ["yarn", "start"]