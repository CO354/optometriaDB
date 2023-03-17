

exports.homePage = (req, res, next) =>{

    
res.render('homepage',{
    title: 'Home - Optometria'
});
    next();
}