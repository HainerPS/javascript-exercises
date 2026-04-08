/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distância em KM da viagem;
*/

console.log('Hello people');

const precoCombustivel = 6.25;
const kmPorLitros = 12;
const distanciaKm = 400;

const custoViagem = (distanciaKm / kmPorLitros) * precoCombustivel;

console.log(custoViagem.toFixed(2));