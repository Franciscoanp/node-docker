Crud utilizando mysql via docker e nodejs.

Passos para configuração e execução do docker e o mongodb:

1- instalar o mongodb
execute: docker pull mongo

2- nomer o banco baixado, definir a porta e indicar qual instalaçao vai ser executada
execute: docker run --name (mongodb) -p 27017:27017 -d mongo

3- listar todas imagens baixadas
docker ps -a

4- Iniciar o banco de dados
docker start mongodb (nome escolhido para o banco de dados, poderia ser qlqr outro nome) 


Passos para configuração e execução do projeto node:
1- Iniciar o banco de dados conforme os passos acima

2- Inicializar o serviço node
execute: npm run dev

Obs.: existe um script no package.json que executa o nodemon 
      em ambiente de desenvolvimento 