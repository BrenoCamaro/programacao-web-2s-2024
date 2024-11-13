const express = require('express');         //Importa as funcionalidades do express
const mustacheExpress = require('mustache-express');


const app = express();                      //app recebe o construtor do express
app.engine('html', mustacheExpress());      //Definindo o renderizador
app.set('view engine', 'html')              //view engine é uma propriedade
app.set('views', __dirname + '/views')      //Liga o motor renderizador com os arquivos


app.get('/', function(req, res){            //Definindo uma rota GET
    let usuario = {
        nome: 'Breno',
        fone: 777
    }
    res.render('index.html', {usuario});    //usuário é um objeto passado como argumento
});                             

const PORT = 8080;
app.listen(PORT, function() {
    console.log('app rodando na porta ' + PORT);
});

