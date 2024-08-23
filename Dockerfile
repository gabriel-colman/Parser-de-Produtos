# Use a imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação está rodando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]