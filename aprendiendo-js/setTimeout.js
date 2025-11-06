var saludo = 'hola';
var name = 'que tal';
setTimeout(function (saludo, name) {
    console.log(saludo + ' ' + name);
}, 1000, saludo, name);
