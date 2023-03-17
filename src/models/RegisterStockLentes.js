const Sequelize = require('sequelize');
const connection = require('../database/database');


const SchemaRegisterStocklentes = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      graduacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelo: {
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

const CreateTableStockLentes = connection.define('stocklentes', SchemaRegisterStocklentes);
CreateTableStockLentes.sync({force: false})

class Stocklentes{
  constructor(body){
    this.body = body;
    this.errors = [];
    this.lentes = null;
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

  await this.lentesExist();
    if (this.errors.length > 0) return;
    
    try {
       
        this.lentes = await CreateTableStockLentes.create(this.body);
    }
    catch (e) {
        console.log('Algo deu ruim');
    }
}

async lentesExist(){
  this.lentes = await CreateTableStockLentes.findOne({where: {
    graduacao: this.body.graduacao, modelo: this.body.modelo, 
  }});

   if(this.lentes)this.errors.push('Este Item Já cadastrado!');
   }



async findAllLentes () {
  const dados =  await CreateTableStockLentes.findAll({raw: true, order: [[
    'id', 'DESC'
  ]]});
  return dados;
}


  valida() {
    this.cleanUp();

    if(typeof this.body.valor !== 'number'){
      parseInt(this.body.valor);
    }

    if(typeof this.body.quantidade !== 'number'){
        parseInt(this.body.quantidade);
      }
      
    
}

  cleanUp() {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    this.body = {
      graduacao:  this.body.graduacao, 
      modelo: this.body.modelo, 
      quantidade: this.body.quantidade, 
      valor: this.body.valor,
    }
}

}





module.exports = Stocklentes;