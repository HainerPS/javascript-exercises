// Realize uma função que escreva seu nome. 
// Posteriormente uma função que diga se a pessoa é maior ou menor de idade.

function escrevaMeuNome(nome) {
    console.log('seu nome é: '+ nome);
}

escrevaMeuNome('Hainer');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade')
    }

    else {
        console.log('Menor de idade')
    }
}

verificarIdade(18);