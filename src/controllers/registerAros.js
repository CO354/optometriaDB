
exports.registerAros = (req, res, next) =>{

    
    res.render('registerAros',{
        title: 'Cadastrar Stock de Aros'
    });
        next();
    }