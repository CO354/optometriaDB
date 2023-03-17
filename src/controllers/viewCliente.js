const FindAll = require('../models/RegisterClient');


exports.tableClientes = async (req, res, next) =>{


    try{
      const  findall = new FindAll();
      const clientes = await findall.findAllCliente()
      
     res.render('viewClientes',{
        title: 'Tabela de Clientes',
        clientes: clientes
    });

    }catch(e){
        console.log('Algo deu ruim' + ' ' + e);
    }


    

    next();
}