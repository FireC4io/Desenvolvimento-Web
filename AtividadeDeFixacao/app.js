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
    res.json(JSON.stringify
        (i = alunos.findIndex(x => x.ra == req.body.ra)) !== -1
            ? (req.body.curso && (alunos[i].curso = alunos[i].curso || []).push(...(Array.isArray(req.body.curso) ? req.body.curso : [req.body.curso])), alunos[i])
            : (alunos.push({ 
                    ra: req.body.ra, 
                    nome: req.body.nome, 
                    turma: req.body.turma, 
                    curso: req.body.curso 
                    ? (Array.isArray(req.body.curso) 
                        ? req.body.curso 
                        : [req.body.curso]) 
                    : [] 
              }), alunos[alunos.length - 1])
    );
});

app.put('/alunos', (req, res) => {
    res.send(JSON.stringify
        (a = alunos.findIndex(x => x.ra == req.query.ra)) !== -1
            ? ((alunos[a].nome = req.body.nome ?? alunos[a].nome),
               (alunos[a].turma = req.body.turma ?? alunos[a].turma),
               req.body.curso && (alunos[a].curso = Array.isArray(req.body.curso) 
                ? req.body.curso 
                : [req.body.curso]),
               (({ nome, turma, curso }) => ({ nome, turma, curso }))(alunos[a])
              )
            : { erro: "Aluno não encontrado" }
    );
});

app.get('/alunos', (req, res) => {
    res.send(req.query.ra    
    ? JSON.stringify((a = alunos.find(x => x.ra == req.query.ra)) 
        ? (({ nome, turma, curso }) => ({ nome, turma, curso }))(a)
        : { erro: "Aluno não encontrado" })
    : JSON.stringify(alunos.map(({ ra, nome, turma }) => ({ ra, nome, turma }))));})

app.delete('/alunos', (req, res) =>
  res.json(JSON.stringify
    (i = alunos.findIndex(a => String(a.ra) === String(req.query.ra))) === -1
      ? { message: "Aluno não encontrado" }
      : (req.query.curso || (req.body && req.body.curso))
          ? (() => {
              const raw = req.query.curso ?? req.body.curso;
              const cursosRemover = Array.isArray(raw) 
                ? raw 
                : String(raw).split(',').map(s=>s.trim()).filter(Boolean);
              alunos[i].curso = Array.isArray(alunos[i].curso) 
                ? alunos[i].curso 
                : [];
              alunos[i].curso = alunos[i].curso.filter(c => !cursosRemover.includes(c));
              return { message: `Cursos removidos: ${cursosRemover.join(', ')}`, aluno: alunos[i] };
            })()
          : (removed = alunos.splice(i, 1)[0], { message: "Aluno removido", aluno: removed })
  )
);

