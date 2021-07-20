const alunos = [
    {
        nome: "Gildinei",
        nota: 9.8
    },
    {
        nome: "Mayk",
        nota: 10
    },
    {
        nome: "Diego",
        nota: 2
    },
];

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / alunos.length;

console.log(alunos);
console.log(`Aluno ${alunos[0].nome}, nota ${alunos[0].nota}`);
console.log(`Aluno ${alunos[1].nome}, nota ${alunos[1].nota}`);
console.log(`Aluno ${alunos[2].nome}, nota ${alunos[2].nota}`);

console.log(`Média ${media}`);