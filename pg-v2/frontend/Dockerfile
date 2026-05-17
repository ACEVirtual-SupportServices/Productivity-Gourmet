FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

USER node

EXPOSE 3000

CMD ["npm", "run", "dev"]