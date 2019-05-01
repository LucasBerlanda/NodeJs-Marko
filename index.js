require('marko/node-require').install();
require('marko/express'); //enable res.marko

const bodyParser = require("body-parser");// pegar parametros do request

var express = require('express');

const ufRenderizaCadastro = require('./views/uf/cadastro.marko');
const ufRenderizaLista = require('./views/uf/lista.marko');
const ufController = require('./controllers/UnidadeFederativaController');

const cidadeRenderizaCadastro = require('./views/cidade/cadastro.marko');
const cidadeRenderizaLista = require('./views/cidade/lista.marko');
const cidadeController = require('./controllers/CidadeController');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + "/views");// especifica onde estarão os html
app.set("view engine", "marko");// diz que estamos usando marko para template

// UFS
app.get('/uf/cadastro', function(req, res) {
    res.marko(ufRenderizaCadastro, ufController.cadastro);
});
app.get('/uf/lista', function(req, res){
    res.marko(ufRenderizaLista, ufController.lista);
});
app.post('/uf/salvar', ufController.salvar);


//CIDADES
app.get('/cidade/cadastro', function(req, res) {
    res.marko(cidadeRenderizaCadastro, cidadeController.cadastro);
});
app.get('/cidade/lista', function(req, res){
    res.marko(cidadeRenderizaLista, cidadeController.lista);
});
app.post('/cidade/salvar', cidadeController.salvar);


app.listen(3000);
