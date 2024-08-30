//Aluno: Breno Camarô Arraes - uc22200177
//Crie uma função que verifique se o número "n" recebido é primo. Retornar true, caso verdadeiro, ou false caso não seja primo.


let numero = 4, resposta =  true;

function verificarNumeroPrimo(num) {

    if(num < 1) {
        console.log("Os números primos são numeros naturais maiores do que 1.");
        return false
    }

    for(let i = 2; num <= num; i++){
        if(num % i == 0) {
            return false;
        }
    }

    return true;
}

resposta = verificarNumeroPrimo(numero);

console.log(resposta);
