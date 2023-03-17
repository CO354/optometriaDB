const Sequelize = require('sequelize');
const connection = new Sequelize('optometria','root', '@bigbang007E',{
    host: 'localhost',
    dialect: 'mysql',
});




module.exports = connection;