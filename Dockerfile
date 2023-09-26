# BUILD
FROM node:18-alpine As build

WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci && npm run build && npm prune --production


# PRODUCTION
FROM node:18-alpine As production
ENV NODE_ENV production

RUN apk add dumb-init

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

RUN npm ci

USER node
EXPOSE 3000
CMD ["dumb-init", "node", "dist/main.js"]