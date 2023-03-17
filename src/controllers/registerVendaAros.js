const VendaAros  = require('../models/RegisterVendaAros');
const StockAros = require('../models/RegisterStockAros');


exports.registerVendaAros = async (req, res, next) =>{  

  try{
    const  findall = new StockAros();
    const aros = await findall.findAllAros();
    
    res.render('registerVendaAros',{
      title: 'Cadastrar Venda de Aros',
      stockaros: aros 
  });

  }catch(e){
      console.log('Algo deu ruim' + ' ' + e);
  }
  next();
}

exports.receiveData = async (req, res, next) =>{
  try{
    const register = new VendaAros(req.body);
    await register.register();

    if(register.errors.length > 0){
     console.log('Erro Encontrado');
    return  res.redirect('/venda/aros')
    }

    console.log('Cadastrado na base de dados');
    res.redirect('/views/venda/aros')

 }catch(e){
     console.log(e);
 }
 next();
  
}