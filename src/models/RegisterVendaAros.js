const CreateTableVendaAros = require('./ModelingVendaAros');
const CreateTableStockAros = require('./ModelingStockAros');
 
class ArosVenda{
  constructor(body){
    this.body = body;
    this.errors = [];
    this.aros = null;
  }
  

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    
    try {
       
        this.aros = await CreateTableVendaAros.create(this.body);
    }
    catch (e) {
        console.log(e)
        console.log('Algo deu ruim');
    }
}



async findAllVendaAros () {
  const dados =  await CreateTableVendaAros.findAll({
    include: [{model:  CreateTableStockAros}],
   });
  return dados;
}
  valida() {
    this.cleanUp();

    console.log(this.body.stockaroId + ' Mensagem')
    
    if(typeof this.body.valor_total !== 'number' && typeof this.body.quantidade_da_venda !== 'number') {
      
     this.body.valor_total = Number(this.body.valor_total) *  Number(this.body.quantidade_da_venda);
      }   
}

  cleanUp() {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    this.body = {
      quantidade_da_venda:  this.body.quantidade_da_venda, 
      referencia_do_aro: this.body.referencia_do_aro, 
      valor_total:this.body.valor_total,
      stockaroId: this.body.stockaroId
    }
}
}

module.exports = ArosVenda;