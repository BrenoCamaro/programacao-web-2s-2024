const express = require('express'); //Importanto o pacote externo express
const calc = require('./util/calculadora');

const app = express(); //Utilizando o construtor do express para criar nossa aplicação
const PORT = 8080;

app.get('/', (req, res)=> {
    res.send("App funcionando!");
});

//: indica que o próximo caractere trata-se de uma variável
app.get('/somar/:a/:b', (req, res)=> {
    let a = req.params.a;
    let b = req.params.b;

    let c = calc.somar(a, b);
    res.send(`${a} + ${b} = ${c}`);

});

app.get('/subtrair/:a/:b', (req, res)=> {
    let a = req.params.a;
    let b = req.params.b;

    let c = calc.subtrair(a, b);
    res.send(`${a} - ${b} = ${c}`);
});

app.get('/multiplicar/:a/:b', (req, res)=> {
    let a = req.params.a;
    let b = req.params.b;

    let c = calc.multiplicar(a, b);
    res.send(`${a} * ${b} = ${c}`);
});

app.get('/dividir/:a/:b', (req, res)=> {
    let a = req.params.a;
    let b = req.params.b;

    let c = calc.dividir(a, b);
    res.send(`${a} / ${b} = ${c}`);
});

//Função arrow. Função callback
app.listen(PORT, ()=>{ 
    console.log("App executando na porta " + PORT);
});