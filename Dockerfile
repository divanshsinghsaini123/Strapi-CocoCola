# Multi-stage Dockerfiles for Strapi v5 using Debian Slim (Recommended for sharp & native C++ bindings)
FROM node:20-bookworm-slim AS build

RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    autoconf \
    automake \
    libvips-dev \
    git \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm ci

WORKDIR /opt/app
COPY . .

ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM node:20-bookworm-slim AS runner

RUN apt-get update && apt-get install -y libvips-dev && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules

WORKDIR /opt/app
COPY --from=build /opt/app ./

ENV PATH=/opt/node_modules/.bin:$PATH
ENV NODE_ENV=production
ENV PORT=1337
ENV HOST=0.0.0.0

EXPOSE 1337

CMD ["npm", "run", "start"]
