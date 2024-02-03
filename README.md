# Rastreamento de Entrega

O projeto de rastreamento de entregas é uma aplicação desenvolvida para proporcionar uma experiência eficiente e transparente no acompanhamento de entregas de produtos. Através desta plataforma, os usuários têm acesso a informações detalhadas sobre suas encomendas, incluindo dados da distribuidora, status em tempo real e informações específicas do cliente.

## Imagens do Projeto

### Tela de buscar CPF

![Tela de buscar CPF](/src/1.png)

### Tela de dados

![Tela de dados](/src/2.png)

## Comandos para iniciar o front-end

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

```bash
cd frontend
npm i
npm start
```

## Comandos para iniciar o back-end

```bash
cd backend
npm i
node ./src/server.js
```

## Ajustes para rodar o back-end(.env)

```.env
MONGOBD=linkmongodb
DELIVERY=API_LISTAGEM_ENTREGAS
ENTERPRISE=API_LISTAGEM_TRANSPORTADORAS
```

## Tecnologias

- NodeJS
- Express
- MongoDB
- ReactJS
