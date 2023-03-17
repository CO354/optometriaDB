const Sequelize = require('sequelize');
const connection = require('../database/database');


const SchemaRegisterStockAros = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      serie: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_de_aro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

}

const CreateTableStockAros = connection.define('stockaros', SchemaRegisterStockAros);
CreateTableStockAros.sync({force: false});



module.exports = CreateTableStockAros;