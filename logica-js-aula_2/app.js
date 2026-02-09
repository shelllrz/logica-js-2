let qtdNumeros = 3; // Robô, vamos somar 3 números
let soma = 0; // Robô, comece a soma do zero
let contador = qtdNumeros; // Robô, você tem 3 "voltas" para completar
while(contador > 0){ // Robô, continue somando enquanto tiver "voltas"
    let numero = parseInt(prompt('Digite o numero:')); // Robô, peça um número
    soma += numero; // Robô, some esse número ao total
    contador--; // Robô, completei uma "volta", diminua o número de "voltas" restantes
}

let media = soma / qtdNumeros; // Robô, divida a soma pela quantidade de números

alert ('A média é ' +media);
