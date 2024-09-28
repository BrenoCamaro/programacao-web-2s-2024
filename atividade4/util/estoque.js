let iDProdutos = 0; //Variável que definirá o id de cada produto adicionado

function adicionar(nome, preco, produtos) {
    iDProdutos += 1; 

    const produto = {
        id : iDProdutos,
        nomeDoProduto: nome,
        precoDoProduto: preco
    };

    produtos.push(produto);
}

function listar(produtos) {
    let resultado = '';
    for (let i = 0; i < produtos.length; i++) {
        resultado += `Id: ${produtos[i].id}, Produto: ${produtos[i].nomeDoProduto}, Preço: R$ ${produtos[i].precoDoProduto}<br>`; // Adiciona a quebra de linha ao final de cada produto
    }

    return resultado || "Nenhum produto no estoque!";
}

function remover(idProduto, produtos) {
    let produtoEncontrado = false;

    for(let i = 0;  i < produtos.length; i++) {
        if(produtos[i].id == idProduto) {
            produtos.splice(i, 1);  //Remove elemento do array
            produtoEncontrado = true;
            break;
        } 
    }

    if(!produtoEncontrado) {
        console.log("Produto não econtrado!")
    }
}

function editar(idProduto, produtos, Novonome, Novopreco) {
    let produtoEncontrado = false;

    for(let i = 0;  i < produtos.length; i++) {
        if(produtos[i].id == idProduto) {
            produtos[i].nomeDoProduto = Novonome;
            produtos[i].precoDoProduto = parseFloat(Novopreco);
            produtoEncontrado = true;
        }
            
    }

    if(!produtoEncontrado) {
        console.log("Produto não econtrado!")
    }
}

module.exports = {
    adicionar,
    listar,
    remover,
    editar
};
