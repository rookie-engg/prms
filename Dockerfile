FROM node:22-alpine3.19 AS base
WORKDIR /usr/local/app

###################### frontend
FROM base AS client-base
COPY frontend/eslint.config.js frontend/vite.config.js ./
COPY frontend/package.json frontend/package-lock.json ./
RUN --mount=type=cache,id=npm,target=/root/.npm npm install
COPY frontend/public ./public
COPY frontend/src ./src

FROM client-base AS client-dev
CMD [ "npm", "run", "dev"]

FROM client-base AS client-build
RUN npm run build

####################### backend
FROM base AS backend-dev
ENV NODE_ENV=dev \
    DB_DIALECT=mysql \
    DB_NAME_DEV=prms \
    DB_HOST=mysql \
    DB_USER=root \
    DB_PORT=3306 \
    SERVER_PORT=8080

COPY backend/package.json backend/package-lock.json ./
RUN --mount=type=cache,id=npm,target=/root/.npm npm install
COPY backend/db ./db
COPY backend/app.mjs ./
COPY backend/index.mjs ./
CMD [ "node" ,"index.mjs" ]

####################### final
FROM base AS final
ENV NODE_ENV=production \
    DB_DIALECT=mysql \
    DB_NAME=prms \
    DB_HOST=localhost \
    DB_USER=root \
    DB_PORT=3306 \
    SERVER_PORT=3000 

COPY backend/package.json backend/package-lock.json ./
RUN npm install --production
COPY backend/ ./
COPY --from=client-build /usr/local/app/dist ./backend/static
EXPOSE 3000
CMD ["node", "index.mjs"]