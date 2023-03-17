
const StockLentes = require('../models/RegisterStockLentes');
exports.registerLentes = (req, res, next) =>{

    
    res.render('registerLentes',{
        title: 'Cadastrar Stock de Lentes'
    });
        next();
    }

exports.receiveData = async (req,res, next) => {
    try{
        const register = new StockLentes(req.body);
        await register.register();
 
        if(register.errors.length > 0){
         console.log('Erro Encontrado');
        return  res.redirect('/register/lentes')
        }
 
        res.redirect('/views/stock/lentes')
        console.log('Cadastrado na base de dados');
 
     }catch(e){
         console.log(e);
     }
     next();
}