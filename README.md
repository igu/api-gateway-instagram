### API GATEWAY Microserviço instagram clone 
----

#### Requisitos  

```node instalado```

#### Como utilizar (Passos)

*  ##### git clone https://github.com/igu/api-gateway-instagram.git

*  ##### abrir 3 diferentes terminais e executar em cada um os comandos abaixo

##### # Terminal I  

* ```npm install```
* ```cd src/api-gateway```
* ```node index.js```

##### # Terminal II  
* ```cd src/api-like-instagram```
* ```node index.js```

##### # Terminal III  
* ```cd src/api-post-instagram```
* ```node index.js```
----

#### API/REST/GATEWAY

| METHOD | URL                                                          | FUNÇÃO         |
|--------|--------------------------------------------------------------|----------------|
| POST   | http://localhost:3333/posts                                  | Criar Post     |
| GET    | http://localhost:3333/posts                                  | Listar Post    |
| DELETE | http://localhost:3333/posts/5dd433c1862b8618a523bc85         | Deletar Post   |
| POST   | http://localhost:3333/posts/5dd4617e082a7f3169696f7a/like    | Curtir Post    |
| POST   | http://localhost:3333/posts/5dd4617e082a7f3169696f7a/deslike | Descurtir Post |

##### Creditos
* [Igor Alisson](https://github.com/igu)
* [Rocketseat](https://github.com/Rocketseat)
* [Wesley Monaro](https://github.com/wesleymonaro)
