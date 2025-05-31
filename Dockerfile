# Dockerfile
FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
