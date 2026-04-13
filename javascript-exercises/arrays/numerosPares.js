// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.

const numeros = [4,8,1,0,3];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0){
        console.log(numero);
    }
}