const StockAros = require('../models/RegisterStockAros');
exports.registerStockAros = (req, res, next) =>{

    
    res.render('registerAros',{
        title: 'Cadastrar Stock de Aros'
    });
        next();
    }

    exports.receiveData =  async (req, res, next) => {
        try{
           const register = new StockAros(req.body);
           await register.register();
    
           if(register.errors.length > 0){
            console.log('Erro Encontrado');
           return  res.redirect('/register/aros')
           }
    
           res.redirect('/view/stock/aros')
           console.log('Cadastrado na base de dados');
    
        }catch(e){
            console.log(e);
        }
    
    
       
            
    
    
    
    
        next();
    
    }