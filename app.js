var express = require('express');
var app = express();
const path = require('path');
const PUERTO = 4000;


app.listen(PUERTO, function () {
  console.log('Servidor http correindo en el puerto 4000');
});

//Ruta raiz
app.get('/', function (req, res) {
  res.send('Hola, estas en la pagina inicial');
  console.log('Se recibio una petición get');
});

//Motor de ruta
app.set('view engine', 'ejs');
//app.set('view engine', 'pug');
//app.set('view engine', 'hbs');

//Ruta de archivo ejs
app.get('/about', function (req, res) {
  res.render('index');
});

//Ruta de archivo .html
app.get("/hola", function (request, response) {
  //show this file when the "/" is requested
  response.sendFile(__dirname + "/views/index.html");
});