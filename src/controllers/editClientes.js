
const Cliente = require('../models/RegisterClient');


exports.editCliente = async (req, res, next) => {

    try{

    const id = req.params.id;
    if(isNaN(id)){
        console.log('Não corresponde a um ID do cliente');
        res.redirect('/view/cliente');
    }
    const findOneCliente = new Cliente()
  
    const foundData = await findOneCliente.findOnePk(id);

    if(foundData === null){
       console.log('Este Identificador nao Existe')
       console.log('Este Identificador nao Existe')
       console.log('Este Identificador nao Existe')
       res.redirect('/view/cliente');
    }else{
        res.render('editCliente', {
            title: 'Editar Dados do Cliente',
            cliente: foundData
        });
    }
     
    
  return foundData;
      
   

   
}catch(e){
    console.log(e);
}


    next();
}






// exports.receiveData =  async (req, res, next) => {
//     try{
//        const register = new Cliente(req.body);
//        await register.register();

//        if(register.errors.length > 0){
//         console.log('Erro Encontrado');
//        return  res.redirect('/register/cliente')
//        }

//        res.redirect('/view/cliente')
//        console.log('Cliente Cadastrado na base de dados');

//     }catch(e){
//         console.log(e);
//     }

// }
   
        