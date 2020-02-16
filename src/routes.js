const { Router } = require('express');
const DevController = require('./controllers/DevController');
const routes = Router();

//Rota de usuarios
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

module.exports = routes;