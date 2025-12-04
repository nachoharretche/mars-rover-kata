FROM node:22.21.1-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate
ENV CI=true
COPY . .

RUN pnpm install