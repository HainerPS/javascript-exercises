/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize as informações abaixo para ler qual a condic1ão de pagamento escolhida e efetuar o calculo.

1 debito -> 10% de desconto
2 dinheiroPix -> 15% desconto
3 duasVezes -> preço normal
4 acimaDuasVezes -> 10% de juros
 */

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, acrescimo) {
    return valor + (valor * (acrescimo / 100));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
}

else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
}

else if (formaDePagamento === 3) {
    console.log(aplicarDesconto(precoEtiqueta, 0));
}
//Poderia ser somente: console.log(aplicarDesconto(precoEtiqueta));

else if (formaDePagamento === 4){
    console.log(aplicarJuros(precoEtiqueta, 10));
}

else {
    console.log('Nao é um numero valido, escolha entre 1 a 4');
}