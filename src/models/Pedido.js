const { Model, DataTypes } = require("sequelize");

class Pedido extends Model {
    //Aqui configuramos os campos da tabela
    //Os campos automáticos não precisam ser declarados
    static init(sequelize){
        super.init(
            {
                cliente: DataTypes.STRING,
                produto:  DataTypes.STRING,
                quantidade:  DataTypes.STRING,
            },
            {
                sequelize,
            }
        )
    }
    //aqui configuramos os relacionamentos
    static associate(models){

    }
}

module.exports = Pedido;