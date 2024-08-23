let notas = [1, 2, 3, "4", false];
//No Js voce pode colocar diferentes tipos de dados em um array

const teste = [2, 4, 5.6];

teste[2] = 4; 
//Isso funciona, pois a constante e a variavel teste e não o elemento no indice

//console.log(teste);

//Matrizes
let ma = [[2, 1, 0],
          [0, 1, 0],
          [1, 2, 1]
];

//Objetos

let capitais = {
    DF: 'Brasilia',
    DF_DDD: 61,
    BA: 'Salvador',
    BA_DDD: 71,
    RJ: 'Rio de Janeiro',
    RJ_DDD: 21
};

//console.log(capitais.DF);  

//Para percorrer todas as propriedades de um objeto, utiliza-se um
//for especial:
// key tera o valor DF, depois DF DDD e assim por diante

for(const key in capitais) {
    const valor = capitais[key];
    console.log(key + ' - ' + valor);
}

//Funcoes
//A linha abaixo e um cometario especial que ajuda as ferramentas a gerar 
//documentação de codigo automatica ao indicar os parametros da funcao e o que
// ela retorna
/**
 * 
 * @param {integer} n 
 * @returns {boolean}
 */
function verificarPar(n) {
    if(n % 2 == 0){
        return true;
    }else {
        return false;
    }
}

