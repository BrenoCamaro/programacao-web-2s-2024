const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
//Renderizador (para renderizar arquivos html quem vou usar?)
app.engine('html', mustacheExpress()); //Chama a engine redenrizadora do mustache e associa o mustache com os arquivos html passando como argumento html e o construtor

//O que vai ser redenrizado (que tipo de arquivos vc vai usar para renderizar telas)
app.set('view engine', 'html')

//Endereço da pasta, ou seja, onde os arquivos estão
//__dirname = variavel global que contem o caminho até a pasta app.html
app.set('views', __dirname + '/views');

app.get('/', (req, res) =>{
    res.render('index.html');
});

const PORT = 8080;
app.listen(PORT, () =>{
    console.log('App escutando na porta '+ PORT);
});