FROM node:bullseye-slim AS build
WORKDIR /website

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --production

FROM node:bullseye-slim
COPY --from=build /website/build build/
COPY --from=build /website/node_modules node_modules/
COPY package.json .

EXPOSE 3000
CMD ["node", "build/index.js"]