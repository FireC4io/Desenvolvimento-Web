const lista = [
    { nome: "Ana", idade: 25, cartoes : ['4123', '5123'] },
    { nome: "Bruno", idade: 30,cartoes: ['6123', '7123']},
    { nome: "Carla", idade: 22,cartoes: ['8123', '9123'] },
    { nome: "Daniel", idade: 28,cartoes: ['1123', '2123'] },
    { nome: "Eduarda", idade: 35,cartoes: ['3123', '4123'] },
    { nome: "Felipe", idade: 27,cartoes: ['5123', '6123'] },
    { nome: "gabriela", idade: 24,cartoes: ['7123', '8123'] },
    { nome: "Henrique", idade: 32,cartoes: ['9123', '1123'] },
    { nome: "Isabela", idade: 29,cartoes: ['2123', '3123'] },
    { nome: "João", idade: 51,cartoes: ['4123', '5123'] }
];

const cartoes = lista.flatMap((cartao) => cartao.cartoes)

console.log(cartoes)