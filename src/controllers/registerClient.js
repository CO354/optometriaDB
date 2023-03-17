
const Cliente = require('../models/RegisterClient');


exports.registerClient = (req, res, next) => {

    res.render('registerClient', {
        title: 'Cadastrar Cliente'
    });


    next();
}

exports.receiveData =  async (req, res, next) => {
    try{
       const register = new Cliente(req.body);
       await register.register();

       if(register.errors.length > 0){
        console.log('Erro Encontrado');
       return  res.redirect('/register/cliente')
       }

       res.redirect('/view/cliente')
       console.log('Cliente Cadastrado na base de dados');

    }catch(e){
        console.log(e);
    }


   
        




    next();

}