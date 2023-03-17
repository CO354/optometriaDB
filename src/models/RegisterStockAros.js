const CreateTableStockAros = require('./ModelingStockAros');


class StockAros{
  constructor(body){
    this.body = body;
    this.errors = [];
    this.aros = null;
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

  await this.arosExist();
    if (this.errors.length > 0) return;
    
    try {
       
        this.aros = await CreateTableStockAros.create(this.body);
    }
    catch (e) {
        console.log('Algo deu ruim');
    }
}

async arosExist(){
  this.aros = await CreateTableStockAros.findOne({where: {
    serie: this.body.serie, modelo: this.body.modelo, 
    tipo_de_aro: this.body.tipo_de_aro, 
    quantidade: this.body. quantidade, valor: this.body.valor}});

   if(this.aros)this.errors.push('Este Item Já cadastrado!');
   }



async findAllAros () {
  const dados =  await CreateTableStockAros.findAll({raw: true, order: [[
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
      serie:  this.body.serie, 
      modelo: this.body.modelo, 
      tipo_de_aro: this.body.tipo_de_aro,
        quantidade: this.body.quantidade, 
        valor: this.body.valor,
    }
}

}





module.exports = StockAros;