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


//const listaFiltrada = lista.filter((pessoa) => !!pessoa.exibir)

//const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 28)

//const listaFiltrada = lista.filter((pessoa) => pessoa.nome === Fernanda)

const filtrarPessoa = (pessoa)=> pessoa.idade > 28

const listaFiltrada = lista.filter(filtrarPessoa)

console.log(listaFiltrada)
