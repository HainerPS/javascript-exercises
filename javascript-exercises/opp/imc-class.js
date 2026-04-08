/* 
MEU CODIGO:

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc(peso, altura) {
        return peso / (altura * altura);
    }
}

const jose = new Pessoas('Jose', 70, 1.75);
console.log(jose.calculoImc(70, 1.75));




crie uma classe para representar pessoas.
para cada pessoa temos o atributo nome, peso e altura.
as pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
instancie uma pessoa chamada Jose que tenha 70kg e 1.75 de altura e peca ao Jose para dizer o valor do seu IMC
faca uma funcao para dizer onde a pessoa se enquadra no imc
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarImc() {
      const imc = this.calcularImc();
      if (imc <= 18.5){
        return ('Abaixo do peso');
    }else if (imc <= 25) {
        return ('Peso normal');
    }else if (imc <= 30) {
        return ('Acima do peso');
    }else if (imc <= 40) {
        return ('Obeso');
    }else {
        return ('Obesidade grave');
    }
    }
}

const jose = new Pessoa ('José', 100, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());
const hainer = new Pessoa ('Hainer', 72, 1.77);
console.log(hainer.calcularImc());
console.log(hainer.classificarImc());