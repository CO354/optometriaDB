

exports.tableLentes = async (req, res, next) =>{

    // try{
    //     const  findall = new FindAll();
    //     const lentes = await findall.findAllLentes()
        
     
  
    //   }catch(e){
    //       console.log('Algo deu ruim' + ' ' + e);
    //   }
  
  
      
  
      res.render('viewVendaLentes',{
        title: 'Tabela de Venda de Lentes',
       
    });
    next();
}