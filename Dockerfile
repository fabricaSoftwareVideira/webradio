# Etapa 1: build da aplicação React
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: servidor web para os arquivos estáticos
FROM nginx:alpine

# Remover configuração default do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar build gerado pelo Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuração customizada de Nginx (ver abaixo)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
