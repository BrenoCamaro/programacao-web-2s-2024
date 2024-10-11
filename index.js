const express = require('express');
const mustacheExpress = require('mustache-express'); // Correta importação do mustache-express
const app = express();

app.engine('html', mustacheExpress()); // Vinculo entre o tipo de arquivo e o motor renderizador
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index.html");
});

app.post('/dados', (req, res) => {
    let dados = {
        nome: req.body.name,
        data_nascimento: req.body.data_nascimento,
        descricao: req.body.descricao
    };
    
    //Validação dos dados
    let erro = false;
    if(dados.nome.length == 0) {
        erro = true;
    }

    if(dados.data_nascimento.length == 0) {
        erro = true;
    }

    if(dados.descricao.length == 0) {
        erro = true;
    }

    if(erro) {
        res.redirect('/?erro = true');
    } else {
        res.render('dados.html', {dados});
    }

});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("app rodando na porta " + PORT);
});