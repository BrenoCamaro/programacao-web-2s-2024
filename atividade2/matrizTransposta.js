//Aluno: Breno Camarô Arraes - uc22200177
//Programa que implementa uma função transporMatriz() que recebe uma matriz, imprime a matriz original e a versão transposta.

let matrizOriginal = [
    [1, 5],
    [7, 3],
    [8, 2]
];
let linhas = 2;
let colunas = 3;
let matrizTransposta = Array.from({ length: linhas }, () => Array(colunas).fill(null));

function transporMatriz(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[0].length; j++) {
            matrizTransposta[j][i] = matriz[i][j];
        }

    }
}

transporMatriz(matrizOriginal);

console.log("Matriz Original: ");
console.table(matrizOriginal);

console.log("Matriz Transposta: ");
console.table(matrizTransposta);