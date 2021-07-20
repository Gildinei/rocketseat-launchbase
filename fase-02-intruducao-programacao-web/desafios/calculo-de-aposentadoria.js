const nome = "Gildinei";
const sexo = "M";
const idade = 60;
const contribuicao = 45;

const calculaTempoContribuicao = idade + contribuicao;

const homem = sexo == 'M' && contribuicao >= 35 && calculaTempoContribuicao >= 95
const mulher = sexo == 'F' && contribuicao >= 30 && calculaTempoContribuicao >= 85

if (homem || mulher) {
    console.log(`${nome}, você pode se aposentar!`);
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
};