const Sequelize = require('sequelize');
const connection = require('../database/database');


const SchemaRegisterCliente = {
  serie: {
     type: Sequelize.STRING,
    allowNull: false,

   },
   nome: {
     type: Sequelize.STRING,
    allowNull: false,
     validate: {
       len: {
         args: [3, 255],
         msg: 'Campo nome deve ter entre 3 e 255 caracteres',
       },
     },
   },
   apelido: {
     type: Sequelize.STRING,
    allowNull: false,
     validate: {
       len: {
         args: [3, 255],
         msg: 'Campo Apelido deve ter entre 3 e 255 caracteres',
       },
     },
   },
   data_de_nascimento: {
     type: Sequelize.STRING,
    allowNull: false,
   },

   idade: {
     type: Sequelize.INTEGER,
    allowNull: false,
     validate: {
       isInt: {
         msg: 'A idade precisa ser um número inteiro',
       },
     },
   },
   genero: {
     type: Sequelize.STRING,
    allowNull: false,
   },
   residencia: {
     type: Sequelize.STRING,
    allowNull: false,
   },
   ocupacao: {
     type: Sequelize.STRING,
    allowNull: false,
   },
   contacto: {
     type: Sequelize.STRING,
    allowNull: false,
   },
   av_sc: {
     type: Sequelize.STRING,
    allowNull: false,
   },
   prescricao: {
     type: Sequelize.STRING,
    allowNull: false,
   },
   r_x: {
     type: Sequelize.STRING,
    allowNull: false,
   },
   tipo_de_tratamento: {
     type: Sequelize.STRING,
    allowNull: false,
   },
   pagamento: {
     type: Sequelize.STRING,
    allowNull: true,
     
   },

}

const CreateTableCliente = connection.define('clientes', SchemaRegisterCliente);
CreateTableCliente.sync({force: false})


module.exports = CreateTableCliente;