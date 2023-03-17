const FindAll = require('../models/RegisterVendaAros');

exports.tableLentes = async (req, res, next) =>{

    try{
        const  findAll = new FindAll();
        const aros = await findAll.findAllVendaAros();
        res.render('viewVendaAros',{
          title: 'Tabela de Venda de Aros',
          arosVendas: aros
         
      });
      
  
      }catch(e){
          console.log('Algo deu ruim' + ' ' + e);
      }
  
  
      
  
    
    next();
}