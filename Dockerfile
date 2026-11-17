FROM node:18-alpine AS base

# Install and build in one stage so node_modules isn't copied into a second
# layer. Copying package*.json first keeps `npm ci` cached until the lockfile
# changes.
FROM base AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
# Clean npm's download cache in the same step so it isn't saved in the layer.
RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

FROM base AS runner
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 80

ENV PORT 80

CMD ["node", "server.js"]