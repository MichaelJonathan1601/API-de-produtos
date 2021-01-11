//importa o express
const express = require("express");

const pedidoController = require ("./controllers/pedidos");

const routes = express.Router();

//configuração da rota
routes.get("/pedidos", pedidoController.listarPedidos);

routes.post("/pedidos", pedidoController.adicionarPedidos);

module.exports = routes;