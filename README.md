# 🧠 Projeto CRUD de Usuários com Express + MongoDB + JWT

Este é um projeto Node.js que implementa um sistema completo de gerenciamento de usuários, com autenticação via token JWT, persistência em MongoDB Atlas via Mongoose e seguindo o padrão arquitetural **MVC**.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
- [Nodemon](https://nodemon.io/) (dev)

---

## 📁 Estrutura do Projeto (MVC)



  crud-mongoDb/
│
├── src/
│ ├── controllers/
│ │ └── userController.js # Regras de negócio e respostas
│ ├── models/
│ │ └── userSchema.js # Schema do usuário (Mongoose)
│ ├── routes/
│ │ └── routes.js # Rotas da API
│ ├── database/
│ │ └── db.js # Conexão com o MongoDB Atlas
│ ├── middleware/
│ │ └── auth.js # Middleware de autenticação JWT
│ └── server.js # Arquivo principal da aplicação
├── .env # Variáveis de ambiente
├── package.json
└── README.md




git clone https://github.com/seu-usuario/crud-mongoDb.git
cd crud-mongoDb

npm install

# Configure sua string de conexão e JWT_SECRET no arquivo .env

npm run dev


MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/usuarios?retryWrites=true&w=majority
JWT_SECRET=sua_chave_secreta
