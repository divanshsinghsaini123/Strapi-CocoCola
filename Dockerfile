# Creating multi-stage build for Strapi v5
FROM node:20-alpine AS build

# Installing libvips-dev and build tools for sharp & native C++ bindings
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    nasm \
    bash \
    vips-dev \
    git

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm ci

WORKDIR /opt/app
COPY . .

ENV NODE_ENV=production
RUN npm run build

# Production image
FROM node:20-alpine AS runner

RUN apk add --no-cache vips-dev

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
