const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://lucasr:123@cluster0-zjnbg.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true

} );

app.use(express.json()); //algo que sera valido para todas as rotas
app.use(routes);
//GET => pegar
//POST => criar, cadastrar, etc... 
//PUT => atualizar
//DELETE => deletar


// Query params: req.query (Filtros, paginacao, ordenacao)
// Routes params: req.params(identificar um recurso na alteracao ou remocao)
// Body:





app.listen(3333);