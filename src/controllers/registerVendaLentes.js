

exports.registerVendaLentes = async (req, res, next) =>{
  
      res.render('registerVendaLentes',{
        title: 'Cadastrar Venda de Lentes',
        
    });
  
    next();
}

exports.receiveData = (req, res) =>{
  
}