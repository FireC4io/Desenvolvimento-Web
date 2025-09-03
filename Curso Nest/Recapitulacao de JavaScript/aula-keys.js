const lista = [
    { nome: "Ana", idade: 25, exibir : true },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 22 },
    { nome: "Daniel", idade: 28 },
    { nome: "Eduarda", idade: 35 },
    { nome: "Felipe", idade: 27 },
    { nome: "Gabriela", idade: 24 },
    { nome: "Henrique", idade: 32 },
    { nome: "Isabela", idade: 29 },
    { nome: "João", idade: 26 }
];

const funcaoReduce = (acc, objeto) => {
    return{
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
};

const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas);

const listaDeVolta = chaves.map((chave) =>({
    nome : chave,
    idade: pessoas[chave].idade
}));

// console.log(pessoas);

console.log(listaDeVolta);

// console.log(Object.keys(lista[0]))

