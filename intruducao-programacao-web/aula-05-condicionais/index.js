const aluno01 = "Gildinei";
const aluno02 = "Mayk";
const aluno03 = "Diego";
const notaAluno01 = 9.8;
const notaAluno02 = 10;
const notaAluno03 = 2;

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;

console.log(`Aluno ${aluno01}, nota ${notaAluno01}`);
console.log(`Aluno ${aluno02}, nota ${notaAluno02}`);
console.log(`Aluno ${aluno03}, nota ${notaAluno03}`);

if (media > 5) {
    console.log(`Média: ${media}. Se sairam bem, continuem estudando!`);
} else {
    console.log(`Média ${media}. Ainda não, estudem mais um pouco, da pra melhorar.`);
}