const FindAll = require('../models/RegisterStockLentes');

exports.tableLentes = async (req, res, next) =>{

    try{
        const  findall = new FindAll();
        const lentes = await findall.findAllLentes()
        
       res.render('viewStockLentes',{
          title: 'Tabela de Stock de Lentes',
          lentes: lentes
      });
  
      }catch(e){
          console.log('Algo deu ruim' + ' ' + e);
      }
  
  
      
  
    next();
}