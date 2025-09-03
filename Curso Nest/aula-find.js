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

const burcarPessoa = (pessoa => pessoa.nome === `Gabriela`)

//const novaPessoa = lista.find((pessoa) => pessoa.idade > 30);

const novaPessoa = lista.find(burcarPessoa);

console.log(novaPessoa);