# PD Disk Catalog
Aplicação web para um catálogo de discos

## Start Up
Para iniciar o projeto, é necessário ter acesso a um serviço de banco de dados MySQL e NodeJS instalado no seu computado.

### Banco
As configurações do banco de dados devem ser atualizadas no arquivo `.env-dev` que encontra-se na pasta `back-end`.

É necessário que seja criado um database no banco de dados, para isso basta usar o comando:

    CREATE DATABASE pd-disk-catalog

Também é necessário criar a tabela, no database criado anteriormente, onde serão armazenado os discos, para isso, use o comando:

    CREATE TABLE disks (
	   id INT NOT NULL AUTO_INCREMENT,
	   title VARCHAR(250) NOT NULL,
	   artist VARCHAR(250) NOT NULL,
	   year INT NOT NULL,
	   createAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	   updateAt DATETIME NOT NULL,
	   PRIMARY KEY ( id )
	);

### Servidor
Quando o projeto for inicializado pela primeira, é necessário instalar as suas dependências. Para isso, com o terminal na parta `back-end`,  use o comando:

    npm install
Para inicializar o servidor, com o terminal na parta `back-end`,  use o comando:

    npm start
O servidor estará inicializado em modo de desenvolvimento. É possível acessar a documentação das rotas através do url:

    localhost:4000

### Aplicação Web
Para inicializar a aplicação web pela primeira vez, é necessário, assim como no servidor, instalar suas dependências. Para isso, na pasta `front-end/pd-disk-catalog`, use, no terminal, o comando; 

    npm install
Para inicializar a aplicação web, com o terminal na parta `front-end/pd-disk-catalog`,  use o comando:

    npm start
O serviço, em modo de desenvolvedor, pode ser acessado através do link:

    localhost:3000
