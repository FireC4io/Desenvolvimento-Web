const lista = [
    { nome: "Ana", idade: 25, exibir : true },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 22 },
    { nome: "Daniel", idade: 28 },
    { nome: "Eduarda", idade: 35 },
    { nome: "Felipe", idade: 27 },
    { nome: "gabriela", idade: 24 },
    { nome: "Henrique", idade: 32 },
    { nome: "Isabela", idade: 29 },
    { nome: "João", idade: 51 }
];

const resultadoSome = lista.some((objeto) => objeto.idade > 50)

const resultadoEvery= lista.every((objeto) => objeto.idade > 50)

console.log(resultadoEvery);
console.log(resultadoSome);