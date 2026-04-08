/* 
1 - Preço do etanol;
2 - Preço do gasolina;
3 - O tipo de combustivel que esta no seu carro;
4 - Gasto médio de combustivel do carro por KM;
5 - Distância em KM da viagem;

imprima no console o valor que sera gasto para realizar esta viagem

MEU PROGRAMA:

const precoEtanol = 5.49;
const precoGasolina = 6.78;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 14;
const distanciaKm = 342;

if (tipoCombustivel === 'Etanol') {
    console.log((distanciaKm / kmPorLitros) * precoEtanol);
}

else if(tipoCombustivel === 'Gasolina') {
    console.log((distanciaKm / kmPorLitros) * precoGasolina);
}

Abaixo com correção do professor:
*/


const precoEtanol = 5.49;
const precoGasolina = 6.78;
const kmPorLitros = 14;
const distanciaKm = 342;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol
    console.log(valorGasto.toFixed(2));

}else {
    const valorGasto = litrosConsumidos * precoGasolina
    console.log(valorGasto.toFixed(2));
}