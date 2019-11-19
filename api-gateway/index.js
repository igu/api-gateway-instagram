const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;

const {
  INSTAGRAM_POSTS_API_URL_CREATE_LIST,
  INSTAGRAM_POSTS_API_URL_DELETE,
  INSTAGRAM_POSTS_API_URL_LIKE,
  FILES_API_URL,
} = require('./URLs');

/* VARIAVEIS COM ACESSO A LINKS DOS "MICROSERVIÇÕES NAS PORTAS CORRESPONDENDENTES" */ 

const createListPostServiceProxy = httpProxy(INSTAGRAM_POSTS_API_URL_CREATE_LIST);
const likePostServiceProxy = httpProxy(INSTAGRAM_POSTS_API_URL_LIKE);
const deletePostServiceProxy = httpProxy(INSTAGRAM_POSTS_API_URL_DELETE);
const filesServiceProxy = httpProxy(FILES_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));


// MICROSERVIÇO INSTAGRAM CLONE PORT: 3001
app.post('/posts', (req, res) => createListPostServiceProxy(req, res)); // CRIAR POST
app.post('/posts/:id/like', (req, res) => likePostServiceProxy(req, res)); // CURTIR POST
app.get('/posts', (req, res) => createListPostServiceProxy(req, res)); // LISTAR POST
app.delete('/posts/:id', (req, res) => deletePostServiceProxy(req, res)); // APAGAR POST

// MICROSERVIÇO: 3002
app.get('/files', (req, res) => filesServiceProxy(req, res)); // VISUALIZAR IMAGEM

app.listen(port, () => console.log(`API GATEWAY RODANDO NA PORTA ${port}!`));