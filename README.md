# Store FullStack

\*\* Contém as seguintes funcionalidades:

- Lista de Produtos(Vitrine)
- Cadastro de Usuário
- Login
- Paginação

## 1. Passos para começar

### Clonando o Repositório

`git clone https://github.com/RKRafaelNascimento/store-backend.git`

### Instalando as Dependências

`npm install`

### Inicializando o Servidor

`npm start` ou `npm run nodemon`

- App na PORT: 3000
- Swagger `http://localhost:3000/swagger`

## 2. Caso queria subir com docker.

### Segue os passos abaixo:

Vá ate o diretorio scripts e execute:

`sh start-application.sh`

ou no diretorio raiz execute:

`docker-compose up`

- Aguarde alguns minutos que vai iniciar a aplicação.
- App na PORT: 3000 e MySql na PORT: 3306

### Como popular o banco

- Dentro do diretorio scripts execute:

`sh populate-db.sh`
