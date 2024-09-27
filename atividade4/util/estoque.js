function adicionar(nome, preco, produtos) {
    const produto = {
        nomeDoProduto: nome,
        precoDoProduto: preco
    };
    produtos.push(produto);
}

function listar(produtos) {
    let resultado = '';
    for (let i = 0; i < produtos.length; i++) {
        resultado += `Produto: ${produtos[i].nomeDoProduto}, Preço: R$ ${produtos[i].precoDoProduto}<br>`; // Adiciona a quebra de linha ao final de cada produto
    }

    return resultado || "Nenhum produto no estoque!";
}

module.exports = {
    adicionar,
    listar
};
