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
    const {ra, nome, turma, curso} = req.body;
    const index = alunos.findIndex(x=>x.ra == req.query.ra)
    index == alunos.findIndex(x=>x.ra == req.query.ra)
        ? curso.push(...req.body.curso)
        : alunos.push({ra, nome, turma, curso});
    res.send(JSON.stringify(alunos[index]));
});


app.put('/alunos',(req, res)=>{
    const index = alunos.findIndex(x=>x.ra == req.query.ra);
        alunos[index] = {ra:req.query.ra, curso:req.body.curso, nome:req.body.nome, turma:req.body.turma};

    res.send(JSON.stringify(alunos[index]));
})

app.get('/alunos', (req, res) => {
    res.send(req.query.ra ? JSON.stringify(alunos.find(x => x.ra == req.query.ra)) : JSON.stringify(alunos))});

