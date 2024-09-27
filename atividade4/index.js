const express = require('express') //Importanto o pacote externo express
const estoque = require ('./util/estoque.js')

const app = express(); //Utilizando o construtor do express para criar nossa aplicação
const PORT = 8080;

produtos = []; //Array de produtos

app.get('/', (req, res)=> {
    res.send("App funcionando!");
});

//: indica que o próximo caractere trata-se de uma variável
app.get('/adicionar/:nome/:preco', (req, res)=> {
    let nome = req.params.nome;
    let preco = parseFloat(req.params.preco);

    estoque.adicionar(nome, preco, produtos)
    res.send(`Produto ${nome} adicionado com sucesso!`);
});

app.get('/listar', (req, res)=> {
    const lista = estoque.listar(produtos)
    res.send(lista);
});

//Função arrow. Função callback
app.listen(PORT, ()=>{ 
    console.log("App executando na porta " + PORT);
});