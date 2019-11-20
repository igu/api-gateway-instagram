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
| DELETE | http://localhost:3333/posts/:id                              | Deletar Post   |
| POST   | http://localhost:3333/posts/:id/like                         | Curtir Post    |
| POST   | http://localhost:3333/posts/:id/deslike                      | Descurtir Post |

---

#### Testando utilizando o Insommnia

![Teste utilizando Insommnia](https://raw.githubusercontent.com/igu/api-gateway-instagram/master/uploads/resized/post-teste-insomnia.png "Testando utilizando o Insommnia")

##### Creditos
* [Igor Alisson](https://github.com/igu)
* [Rocketseat](https://github.com/Rocketseat)
* [Wesley Monaro](https://github.com/wesleymonaro)
