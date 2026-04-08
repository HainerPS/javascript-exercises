/* 
1 - crie uma classe para representar carros
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por Km rodado.
Crie um metodo que dado a quantidfade de quilometros e o preco do combustivel nos de o valor gasto em reais para realizar este percurso.

descrever() {
    console.log(`Seu carro da marca ${this.marca} e cor ${this.cor} faz R$ ${this.litrosPorKm}`);
  }
*/

class Carro {
    marca;
    cor;
    litrosPorKm;

    constructor(marca, cor, litrosPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.litrosPorKm = litrosPorKm;
    }

    calcularGasto(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.litrosPorKm * precoCombustivel;
    }
}

const cliozin = new Carro('Renault', 'azul', 1/14);
console.log(cliozin.calcularGasto(100, 5).toFixed(2));
const uno = new Carro('Fiat', 'prata', 1/12);
console.log(uno.calcularGasto(75, 5).toFixed(2));