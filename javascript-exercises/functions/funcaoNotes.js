/*
Função é um pequeno trecho de código que podemos invoca-lo para ser executadas varias vezes.

function teste(){
    console.log('teste');
}

invocando a funcao 
teste ()

---------------------------

function sayMyName(nome) {
    console.log('Your name is: ' + nome)
}

sayMyName('Hainer');
sayMyName('Soares');

----------------------------

function quadrado(valor) {
   return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

----------------------------

function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(115, 12));

-----------------------------------------------

function calcularJuros(){

}

function main() {
    console.log('Programa principal');
    calcularJuros();
}

main();

------------------------------------------------

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc <= 18.5){
       return('Abaixo do peso');
    }else if (imc <= 25) {
       return('Peso normal');
    }else if (imc <= 30) {
       return('Acima do peso');
    }else if (imc <= 40) {
        return('Obeso');
    }else {
        return('Obesidade grave');
    }
}

function main() {
    const peso = 74;
    const altura = 1.77;
    const imc = calcularImc(peso, altura);
    console.log(imc.toFixed(1));
    console.log(classificarImc(imc));
}

main();

-----------------------------------------

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc <= 18.5){
       return('Abaixo do peso');
    }else if (imc <= 25) {
       return('Peso normal');
    }else if (imc <= 30) {
       return('Acima do peso');
    }else if (imc <= 40) {
        return('Obeso');
    }else {
        return('Obesidade grave');
    }
}

Utilizando o Main para ser executado uma unica vez (usar parenteses no funcao toda, e depois abrir outro), observar tambem que o nome da funcao foi retirado.
(function () {
    const peso = 74;
    const altura = 1.77;
    const imc = calcularImc(peso, altura);
    console.log(imc.toFixed(1));
    console.log(classificarImc(imc));
})();

--------------------------------------------------

Criando uma funcao dentro de outra funcao

function escrevaMeuNome(nome) {
    return ('seu nome é: '+ nome);
}

escrevaMeuNome('Hainer');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log((escrevaMeuNome('Hainer')) + ' e você é MAIOR de idade');
    }

    else {
        console.log((escrevaMeuNome('Hainer')) +' e você é MENOR de idade');
    }
}

verificarIdade(18); 

--------------------------------------------

1 debito -> 10% de desconto
2 dinheiroPix -> 15% desconto
3 duasVezes -> preço normal
4 acimaDuasVezes -> 10% de juros

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

------------------------------------------

*/