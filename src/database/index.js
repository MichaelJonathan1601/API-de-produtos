const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

//imports dos models
const Pedido = require("../models/Pedido");

const conexao = new Sequelize(dbConfig);

//Inicializa as models
Pedido.init(conexao);


//Inicializa os relacionamentos
Pedido.associate(conexao.models);