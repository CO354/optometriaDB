const CreateTableCliente = require('./ModelingRegisterClient');

class Clientes{
  constructor(body){
    this.body = body;
    this.errors = [];
    this.clients = null;
    this.params = undefined;
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

  await this.clientsExist();
    if (this.errors.length > 0) return;
    
    try {
       
        this.clients = await CreateTableCliente.create(this.body);
    }
    catch (e) {
        console.log('Algo deu ruim');
    }
}

async clientsExist(){
  this.clients = await CreateTableCliente.findOne({where: {nome: this.body.nome, apelido: this.body.apelido}});
   if(this.clients)this.errors.push('Este Cliente Já cadastrado!');
   }



async findAllCliente () {
  const dados =  await CreateTableCliente.findAll({raw: true, order: [[
    'id', 'DESC'
  ]]});
  return dados;
}


async findOnePk(id){
 const dados = await CreateTableCliente.findByPk(id)
 if(isNaN(dados)){
  this.errors.push('Não corresponde a um ID');
 }
 
 return dados;
}


  valida() {
    this.cleanUp();

    if(this.body.nome.length < 3 || this.body.nome > 50){
        this.errors.push('O nome precisa ter 3 ou mais caracteres.');
    }

    if(this.body.apelido.length < 3 || this.body.apelido > 50){
        this.errors.push('O Apelido precisa ter 3 ou mais caracteres.');
    }

    if(typeof this.body.idade !== 'number'){
      parseInt(this.body.idade);
    }
      
    
}

  cleanUp() {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    this.body = {
        serie: this.body.serie,
        nome: this.body.nome,
        apelido: this.body.apelido,
        data_de_nascimento: this.body.data_de_nascimento,
        idade: this.body.idade,
        genero: this.body.genero,
        residencia: this.body.residencia,
        ocupacao: this.body.ocupacao,
        contacto: this.body.contacto,
        av_sc: this.body.av_sc,
        prescricao: this.body.prescricao,
        r_x: this.body.r_x,
        tipo_de_tratamento: this.body.tipo_de_tratamento,
        pagamento: this.body.pagamento
    }
}

}





module.exports = Clientes;