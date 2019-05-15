Crud utilizando mysql via docker e nodejs.

Passos para configura��o e execu��o do docker e o mongodb:

1- instalar o mongodb
execute: docker pull mongo

2- nomer o banco baixado, definir a porta e indicar qual instala�ao vai ser executada
execute: docker run --name (mongodb) -p 27017:27017 -d mongo

3- listar todas imagens baixadas
docker ps -a

4- Iniciar o banco de dados
docker start mongodb (nome escolhido para o banco de dados, poderia ser qlqr outro nome) 


Passos para configura��o e execu��o do projeto node:
1- Iniciar o banco de dados conforme os passos acima

2- Inicializar o servi�o node
execute: npm run dev

Obs.: existe um script no package.json que executa o nodemon 
      em ambiente de desenvolvimento 