/* Я создал тестовый сервер для работы с node */

//const text = require('variable.js');
// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();
//app.use(express.static('gulp/'));
//app.use(express.static('gulp/node_modules/bootstrap/dist/js/'));
app.use(express.static('src/'));
//app.use(express.static('src/js/'));
app.use(express.static('src/html/'));


// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

let port = 8083;
// запускаем сервер на порту 8081
app.listen(port);
// отправляем сообщение
console.log('Сервер стартовал  на '  + port + ' !!!! ');







