# ---------- build stage ----------
FROM node:18-alpine AS build
WORKDIR /app

# copy package files first
COPY package*.json ./
RUN npm ci --no-audit --prefer-offline

# copy source and build
COPY . .
RUN npm run build

# ---------- production stage ----------
FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
