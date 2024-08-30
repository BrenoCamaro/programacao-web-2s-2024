//Aluno: Breno Camarô Arraes - uc22200177
//Crie uma função que verifique se o número "n" recebido é primo. Retornar true, caso verdadeiro, ou false caso não seja primo.



function verificarNumeroPrimo(num) {

    if(num <= 1) {
        console.log("Os números primos são numeros naturais, isto é,  maiores do que 1.");
        return false
    }

    if((num > 2) && (num % 2 == 0)) {
        return false;
    }

    for(let i = 3; i <= num; i+=2){
        if((num % i == 0) && (i != num)) {
            return false;
        }
    }

    return true;
}

console.log(verificarNumeroPrimo(9)); //false
console.log(verificarNumeroPrimo(1)); //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false
