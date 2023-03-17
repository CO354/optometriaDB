const express = require('express');
const app = express();
const connection = require('./src/database/database');
connection.authenticate()
.then(() => console.log('Banco connectado'))
.catch((e) => console.log(e));

const router = require('./router');
const {middlewareGlobal} = require('./src/middlewares/middlewares');
const path = require('path');

// EXPRESS 
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({extended: true}));
app.use(express.json());




// MIDDLEWARES 
app.use(middlewareGlobal);

app.use(router);

app.listen(4444, () => {
    console.log('Escuntando na porta 4444');
    console.log('http://localhost:4444');
})








