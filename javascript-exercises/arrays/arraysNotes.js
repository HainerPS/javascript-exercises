/* sao basicamente listas
const alunos = [ 'joao', 'vitor', 'maria'];
console.log(alunos);


para pegar determinado item dentro da lista
const alunos = [ 'joao', 'vitor', 'maria'];
console.log(alunos[2]);


para adicionar item a lista
const alunos = [ 'joao', 'vitor', 'maria'];
alunos.push('hainer')
console.log(alunos[3]);

OU

const alunos = [ 'joao', 'vitor', 'maria'];
alunos.push('Macedo');
alunos[4] = 'Texeira';
console.log(alunos);


realizando a substituicao de algum item na lista (vai trocar a Maria pelo Teixeira)
const alunos = [ 'joao', 'vitor', 'maria'];
alunos.push('Macedo');
alunos[2] = 'Texeira';
console.log(alunos);


entendendo a necessidade de estruturas de repeticao

*/

const notas = [];

notas.push(5);
notas.push(4);
notas.push(7);
notas.push(6);
notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / 5);