const express = require('express') //Importanto o pacote externo express
const estoque = require ('./util/estoque.js')

const app = express(); //Utilizando o construtor do express para criar a aplicação
const PORT = 8080;

produtos = []; //Array de produtos

app.get('/', (req, res)=> {
    res.send("App funcionando!");
});


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

app.get('/remover/:id', (req, res)=> {
    let id = req.params.id;
    const lista = estoque.remover(id, produtos)
    res.send('Produto removido com sucesso!');
});

app.get('/editar/:id/:nome/:preco', (req, res)=> {
    let id = req.params.id;
    let nome = req.params.nome;
    let preco = req.params.preco
    const lista = estoque.editar(id, produtos, nome, preco)
    res.send('Produto alterado com sucesso!');
});


app.listen(PORT, ()=>{ 
    console.log("App executando na porta " + PORT);
});