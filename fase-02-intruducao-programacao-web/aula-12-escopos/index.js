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
        nota: 0
    },
    {
        nome: "Summer",
        nota: 3
    },
];

function calculaMedia(alunos) {
    let soma = 0;

    for(let index = 0; index < alunos.length; index++) {
        soma += alunos[index].nota
    };

    return soma / alunos.length;
};

function enviarMensagem(media) {
    if (media > 5) {
        console.log(`A média foi de ${media}, continue estudando!`);
    }else {
        console.log(`A média ${media}, da pra melhorar.`);
    };
};

const mediaDaTurmaA = calculaMedia(alunosDaTumaA);
const mediaDaTurmaB = calculaMedia(alunosDaTumaB);
enviarMensagem(mediaDaTurmaA)
enviarMensagem(mediaDaTurmaB);
