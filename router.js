const express = require('express');
const router = express.Router();


const homePage = require('./src/controllers/homePage');

const registerClient = require('./src/controllers/registerClient');
const registerLentes = require('./src/controllers/registerStockLentes');
const registerAros = require('./src/controllers/registerStockAros');

const registerVendaAros = require('./src/controllers/registerVendaAros');
const registerVendaLentes = require('./src/controllers/registerVendaLentes');


const viewCliente = require('./src/controllers/viewCliente');
const viewStockAros = require('./src/controllers/viewStockAros');
const viewStockLentes = require('./src/controllers/viewStockLentes');


const viewVendaAros = require('./src/controllers/viewVendaAros');
const viewVendaLentes = require('./src/controllers/viewVendaLentes');

// SECTION FOR EDITION DATA

const editCliente = require('./src/controllers/editClientes');





router.get('/', homePage.homePage);

router.get('/register/cliente', registerClient.registerClient);
router.post('/receive/data/cliente', registerClient.receiveData);

router.get('/register/lentes', registerLentes.registerLentes);
router.post('/receive/data/lentes', registerLentes.receiveData);

router.get('/register/aros', registerAros.registerStockAros);
router.post('/receive/data/aros', registerAros.receiveData);


router.get('/venda/aros', registerVendaAros.registerVendaAros);
router.post('/receive/data/venda/aros', registerVendaAros.receiveData);

router.get('/venda/lentes', registerVendaLentes.registerVendaLentes);


// SECTION FOR EDITION 
router.get('/editar/dados/cliente/:id', editCliente.editCliente);


router.get('/view/cliente', viewCliente.tableClientes);
router.get('/view/stock/aros', viewStockAros.tableStockAros);
router.get('/views/stock/lentes', viewStockLentes.tableLentes);

router.get('/views/venda/aros',viewVendaAros.tableLentes);
router.get('/views/venda/lentes',viewVendaLentes.tableLentes);





/////////////////////=================/////////////////










module.exports = router;