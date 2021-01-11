const Pedido = require("../models/Pedido");
const { Op } = require('sequelize')


module.exports = {
    //função que vai ser executada pela rota
    async listarPedidos(req, res){

        try {

            let cliente = req.query.cliente

            if(cliente)
            {
            const pedidos = await Pedido.findAll({
                where: {
                  cliente: {
                    [Op.like]: `%${cliente}%`
                  }
                },
              });

              return res.status(200).send({ pedidos });
            }
            else{
            const pedidos = await Pedido.findAll();

            res.send(pedidos);
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ error })
        }

        
    },
    
    async adicionarPedidos(req, res){
        //receber os dados do body
        const { cliente, produto, quantidade } = req.body;
    
        
        try {

             pedido = await Pedido.create({cliente, produto, quantidade});

            res.status(201).send({ id: pedido.id });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
       
        
        
        //incrementar o último id
        //const nextId = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1;
    
        //adicionar o aluno na lista
        //alunos.push({ id: nextId, ra, nome, email, senha });
    
        //retornar resposta de sucesso
       
    },
    
    
    
    
   
}

