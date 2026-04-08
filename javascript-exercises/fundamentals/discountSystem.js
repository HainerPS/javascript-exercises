/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize as informações abaixo para ler qual a condic1ão de pagamento escolhida e efetuar o calculo.

1 debito
2 dinheiroPix
3 duasVezes
4 acimaDuasVezes
 */

const precoEtiqueta = 100;
const formaDePagamento = 3;

if (formaDePagamento === 1) {
    const desconto = precoEtiqueta * 0.10;
    const valorFinal = precoEtiqueta - desconto;
    console.log('O valor é R$:',valorFinal, 'debito');
}

else if (formaDePagamento === 2) {
    const desconto = precoEtiqueta * 0.15;
    const valorFinal = precoEtiqueta - desconto;
    console.log('O valor é R$:',valorFinal, 'dinheiro ou Pix');
}

else if (formaDePagamento === 3) {
    console.log('O valor é R$:',precoEtiqueta, '. Feito em duas vezes');
}

else if (formaDePagamento === 4){
    const acrescimo = precoEtiqueta * 0.10;
    const valorFinal = precoEtiqueta + acrescimo;
    console.log('O valor é R$:',valorFinal, '. Compra realizada com 10% de juros');
}

else {
    console.log('Nao é um numero valido, escolha entre 1 a 4');
}