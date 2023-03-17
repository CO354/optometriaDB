const FindAll = require('../models/RegisterStockAros');


exports.tableStockAros = async (req, res, next) =>{

    
    try{
        const  findall = new FindAll();
        const aros = await findall.findAllAros();
        
       res.render('viewStockAros',{
          title: 'Tabela de Stock de Aros',
          aros: aros
      });
  
      }catch(e){
          console.log('Algo deu ruim' + ' ' + e);
      }
  
  
      
  
      next();
    }