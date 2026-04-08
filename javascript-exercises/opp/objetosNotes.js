/*
Aprendendo sobre objetos.
Um objeto é uma coleçao de valores, agrupa valores. Funciona atraves de chave e valor

Sintaxe:
const hainer = {
    nome: 'Hainer P Soares',
    idade: 25
};

posso chamar o objeto da seguinte forma:
console.log(hainer.nome);
console.log(hainer.idade);
console.log(hainer);

OUTRA FORMA -.-.-.-.-

const hainer = {
    nome: 'Hainer P Soares',
    idade: 25
};

hainer.altura = 1.77;
console.log(hainer);



Alem de adiocionar informacoes, posso tambem remover, como:
delete hainer.nome;

console.log(hainer);


----------------------------------------------------------



Metodo para objetos, aqui pode-se utilizar funcoes (uma funcao dentro de um objeto é chamado de metodo):

const pessoa = {
    nome: 'Hainer P Soares',
    idade: 27,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.nome = 'Hainer';
pessoa.idade = 30;

pessoa.descrever();

OOOOUUU

const pessoa = {
    nome: 'Hainer P Soares',
    idade: 27,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever = function() {
    console.log(`meu nome é ${this.nome}`)
}

pessoa.descrever();


----------------------------------------------------------


ACESSANDO DINAMICAMENTE UMA ATRIBUTO
const pessoa = {
    nome: 'Hainer P Soares',
    idade: 27,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa['idade']);
// acima é uma notacao de colecao

OOOOUUUUU

const pessoa = {
    nome: 'Hainer P Soares',
    idade: 27,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
    // quando for declarar um metodo, nao é necessario delarar function pode ser apenas: descrever() {}
};

pessoa['nome'] = 'teste';
// dinamico
pessoa.nome = 'teste';
// direto


----------------------------------------------------------


Diferenciando instancia e ocorrencia

a classe define a instancia, depois o valor que a descreve é a ocorrencia, como abaixo Pessoa é a instancia, e Hainer a ocorrencia:]

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const hainer = new Pessoa;
hainer.nome = 'Hainer Portes Soares';
hainer.idade = 27;

const vitoria = new Pessoa;
vitoria.nome = 'Vitoria M L Becker';
vitoria.idade = 27;

console.log(hainer);
console.log(vitoria);


----------------------------------------------------------


Criando instancias com o Constructor

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2026 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const hainer = new Pessoa('Hainer', 27);

const vitoria = new Pessoa('Vitoria', 26);

console.log(hainer);
console.log(vitoria);

----------------------------------------------------------

FUNCOES RECEBENDO OBJETOS

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2026 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const hainer = new Pessoa('Hainer', 27);
const vitoria = new Pessoa('Vitoria', 26);

compararPessoas(hainer, vitoria);

*/
