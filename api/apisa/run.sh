#!/bin/bash

echo Carregar contêiner de aplicativo 
sudo docker-compose up -d

echo Copiando o Arquivo de Exemplo de Configuração
sudo docker exec -it apisa-app cp .env.example .env

echo Instalar dependências
sudo docker exec -it apisa-app composer install

echo Gerar chave
sudo docker exec -it apisa-app php artisan key:generate

echo Make migrations
sudo docker exec -it apisa-app php artisan migrate

echo Make seeds
sudo docker exec -it apisa-app php artisan db:seed

echo Informação dos novos contentores
sudo docker ps -a 
