# Rastreamento de Entrega

O projeto de Rastreamento de Entregas é uma aplicação desenvolvida para oferecer uma experiência eficiente e transparente no acompanhamento de entregas de produtos. Por meio dessa plataforma, os usuários têm acesso a informações detalhadas sobre suas encomendas, incluindo dados da distribuidora, status em tempo real e informações específicas do cliente.

## Imagens do Projeto

### Tela de buscar CPF

![Tela de buscar CPF](/src/1.png)

### Tela de dados

![Tela de dados](/src/2.png)

## Instruções para Inicialização do Front-end

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

```bash
cd frontend
npm i
npm start
```

## Instruções para Inicialização do Back-end

```bash
cd backend
npm i
node ./src/server.js
```

## Configurações para Execução do Back-end (.env)
Crie um arquivo .env no diretório backend com as seguintes configurações:

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
- TailwindCSS

Este projeto utiliza uma combinação de tecnologias modernas, incluindo NodeJS e ReactJS, para proporcionar uma experiência de rastreamento de entregas eficiente e amigável. Sinta-se à vontade para contribuir e aprimorar este projeto!
