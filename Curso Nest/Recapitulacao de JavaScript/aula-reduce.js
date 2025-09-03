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

// Record<String, string>

// const pessoa ={
//     jose:{
//         idade: 30,
//     },
//     joao:{
//         idade: 25,
//     },
//     maria:{
//         idade: 28,
//     }
// }

const funcaoReduce = (acc, objeto) => {
    return{
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
};

const pessoas = lista.reduce(funcaoReduce, {});

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, []);

console.log(pessoas);
console.log(pessoas.Gabriela.idade);
console.log(pessoasArray);