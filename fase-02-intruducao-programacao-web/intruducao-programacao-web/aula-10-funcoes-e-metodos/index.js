const alunosDaTumaA = [
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

const alunosDaTumaB = [
    {
        nome: "Rickizinho",
        nota: 11
    },
    {
        nome: "Morty",
        nota: 2
    },
    {
        nome: "Summer",
        nota: 5
    },
];

function calculaMedia(alunos) {
    console.log(alunos);
    console.log(`Aluno ${alunos[0].nome}, nota ${alunos[0].nota}`);
    console.log(`Aluno ${alunos[1].nome}, nota ${alunos[1].nota}`);
    console.log(`Aluno ${alunos[2].nome}, nota ${alunos[2].nota}`);

    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / alunos.length;
};

function enviaMensagem(media) {
    if (media > 5) {
        console.log(`A média foi de ${media}. Continue estudando!`);
    }else {
        console.log(`A média ${media}, Continue estudando!`);
    };
};

const mediaDaTurmaA = calculaMedia(alunosDaTumaA);
const mediaDaTurmaB = calculaMedia(alunosDaTumaB);

enviaMensagem(mediaDaTurmaA);
enviaMensagem(mediaDaTurmaB);