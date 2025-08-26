# 🚀 Estrutura de Dockerfile para React + Vite
# Etapa 1 - Build da aplicação
FROM node:20-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências (suporta tanto npm quanto pnpm)
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Instalar pnpm e dependências
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copiar todo o código para dentro do container
COPY . .

# Gerar a build de produção do Vite (apenas frontend)
RUN pnpm run build:client

# Etapa 2 - Servir com Nginx
FROM nginx:alpine

# Remover configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar build gerada do Vite para o diretório do Nginx
COPY --from=builder /app/dist/spa /usr/share/nginx/html

# Copiar configuração customizada do Nginx para SPA
COPY nginx-spa.conf /etc/nginx/conf.d/default.conf

# Expor porta 80 (EasyPanel)
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
