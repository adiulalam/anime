FROM node:18-alpine AS base

FROM base AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci \
    && rm -rf node_modules/@next/swc-linux-*-gnu \
    && npm cache clean --force

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