const Sequelize = require('sequelize');
const connection = require('../database/database');
const CreateTableStockAros = require('./ModelingStockAros')




const SchemaRegisterVendaAros = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      quantidade_da_venda: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      referencia_do_aro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valor_total: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },


}
 const CreateTableVendaAros = connection.define('arosvenda', SchemaRegisterVendaAros);
 
 
 CreateTableStockAros.hasMany(CreateTableVendaAros);
 
 CreateTableVendaAros.belongsTo(CreateTableStockAros)
 
 CreateTableVendaAros.sync({force: false}).then((veja) => console.log(veja + "CADASTRANDO TUDO PRIMEIRO"))


 

module.exports = CreateTableVendaAros;