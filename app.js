const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var alunos = [
    { 

        ra: 123456,
        nome: "João Silva",
        turma: 'ADS',
        curso:['JavaScript', 'TypeScript', 'Python']

    },
    {
        ra: 654321,
        nome: "Maria Oliveira",
        turma: 'ADS',
        curso:['JavaScript', 'C', 'Java']
    },
    {
        ra: 789012,
        nome: "Carlos Pereira",
        turma: 'ADS',
        curso:['PHP', 'Kotlin', 'Python']
    }
]

app.post('/alunos', (req, res) => {
    const {id, nome, turma} = req.body
    alunos.push({id, nome, turma})
    res.status(201).send({id, nome, turma})
});

app.put('/alunos/:ra',(req, res)=>{
const index = alunos.findIndex(x=>x.ra == req.query.ra);
alunos[index] = {ra:req.query.ra, curso:req.body.curso}
res.send(JSON.stringify(alunos));
})



