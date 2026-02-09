let qtNumeros = 3; // Robô, vamos somar 3 números
let soma = 0; // Robô, comece a soma do zero
let conta = qtNumeros; // Robô, você tem 3 "voltas" para completar
while(conta > 0){ // Robô, continue somando enquanto tiver "voltas"
    let numero = parseInt(prompt('Digite o numero:')); // Robô, peça um número
    soma += numero; // Robô, some esse número ao total
    conta--; // Robô, completei uma "volta", diminua o número de "voltas" restantes
}
let media = soma / qtNumeros; // Robô, divida a soma pela quantidade de números
let qtdNumeros = 1;
let contador = qtdNumeros;
while (contador <= 10) {
    let numero = parseInt(prompt('Digite um número:'));
    alert('O número digitado foi: ' + numero);
    contador++;
}
// a função parseInt() é usada para converter a entrada do usuário, que é uma string, em um número inteiro. O loop while continua a solicitar números do usuário e exibir o número digitado até que o contador seja maior que 0
// Um contador só funciona se ele caminhar na mesma direção da condição de parada. Antes de escolher ++ ou --, é obrigatório responder três coisas:
// 1. onde o valor começa?
// 2. Onde ele precisa parar?
// 3. Para qual lado ele precisa ir para sair do loop?
// Se a condição for ",emor ou igual", o valor precisa crescer. Se a condição for "maior ou igual", o valor precisa diminuir
