// Atividade 12

/* 

    Considerando o seguinte array:

    const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
    ];

*/

const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

// Atividade 12 - 01

// Imprima no console a quantidade de pessoas Total.

console.log(`Quantidade total de pessoa: ${data.length}`);

    
// Atividade 12 - 02

// Imprima no console a quantidade de pessoas pessoas do sexo Feminino.

console.log(`Quantidade de pessoas do sexo feminino: ${data.filter(pessoa => pessoa.sexo === 'F').length}`);


// Atividade 12 - 03

// Imprima no console a soma do salário de todas as pessoas.

let soma = 0;

data.forEach(function (funcionario) {
    soma += funcionario.salario;
})

console.log(`A soma de todos os salarios é: ${soma} `);


// Atividade 12 - 04

// Imprima no console a média do salário de todas as pessoas.

console.log(`A média do salário de todos so funcionários é de ${(soma / (data.length)).toFixed(2)}`);


// Atividade 12 - 05

// Imprima no console a soma do salário de todos as pessoas do sexo Masculino

let somaSalarioMasc = 0;

data.forEach(function (elemento) {
    if (elemento.sexo == "M") {
        somaSalarioMasc += elemento.salario;
    }
});

console.log(`A soma do salário de todas as pessoas do sexo Masculino é R$ ${somaSalarioMasc}`);


// Atividade 12 - 06

// Imprima no console a média do salário de todas as pessoas do sexo Masculino

let funcMasc = 0;

data.forEach(function (pessoa) {
    if (pessoa.sexo === 'M') {
        funcMasc++;
    }
});

console.log(`A média do salário de todos os funcionários do sexo masculino é ${(somaSalarioMasc / funcMasc).toFixed(2)}`);

// const funcMasc = data.filter(function (pessoa) {
//    return pessoa.sexo === 'M';
// });
// console.log(funcMasc.length);
// console.log(`A média do salário de todos os funcionários do sexo masculino é ${(somaSalarioMasc/funcMasc.length).toFixed(2)}`);


// Atividade 12 - 07

/*

Utilize a função Some, para descobrir se existe algum salário
superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
contrário falso. 

*/

const salarioSuperior = data.some(function (pessoa) {
    return pessoa.salario > 7000;
});

console.log(`Existe salário maior que R$ 7000 ? ${salarioSuperior}`);


// Atividade 12 - 08

// Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.

const posicaoEvaTrindade = data.findIndex(function (acharEva){
    return acharEva.nome == "Eva Trindade";

});

console.log (` posição de Eva e: ${posicaoEvaTrindade}`);


// Atividade 12 - 09 

// Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".

const pessoasSilva = data.filter(function (pessoa) {
    return pessoa.nome.includes('Silva');
});

console.log(pessoasSilva);


// Atividade 12 - 10

// Imprima os nomes utilizando o MAP

console.log(data.map(function(pessoa){
    return pessoa.salario;
}));