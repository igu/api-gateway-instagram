const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();

const {
  INSTAGRAM_POSTS_API_URL_CREATE,
  INSTAGRAM_POSTS_API_URL_LIST,
  INSTAGRAM_POSTS_API_URL_DELETE,
  INSTAGRAM_POSTS_API_URL_LIKE,
  INSTAGRAM_POSTS_API_URL_DESLIKE,
} = require('./URLs');

/* VARIAVEIS COM ACESSO A LINKS DOS "MICROSERVIÇÕES NAS PORTAS CORRESPONDENDENTES" */ 

const createPostServiceProxy = httpProxy(INSTAGRAM_POSTS_API_URL_CREATE);
const listPostServiceProxy = httpProxy(INSTAGRAM_POSTS_API_URL_LIST);
const deletePostServiceProxy = httpProxy(INSTAGRAM_POSTS_API_URL_DELETE);
const likePostServiceProxy = httpProxy(INSTAGRAM_POSTS_API_URL_LIKE);
const deslikePostServiceProxy = httpProxy(INSTAGRAM_POSTS_API_URL_DESLIKE);


app.get('/', (req, res) => res.send('Gateway API'));


// MICROSERVIÇO INSTAGRAM CLONE PORT: 3001
app.post('/posts', (req, res) => createPostServiceProxy(req, res)); // CRIAR POST
app.get('/posts', (req, res) => listPostServiceProxy(req, res)); // LISTAR POST
app.delete('/posts/:id', (req, res) => deletePostServiceProxy(req, res)); // APAGAR POST

// MICROSERVIÇO: 3002
app.post('/posts/:id/like', (req, res) => likePostServiceProxy(req, res)); // CURTIR POST
app.post('/posts/:id/deslike', (req, res) => deslikePostServiceProxy(req, res)); // DESCURTIR POST

app.listen(3333);
console.log('Api Gateway');
console.warn('Listen on 3333');