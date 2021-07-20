# FASE 02 - Iniciando com a programação web
---
## AULA 01 - Iniciando no JavaScript
### O que é programação?
Programção é o ato de ensinar, passar instruções, ao computador. Podemos chamar essas instruções de algoritmos.

Algoritmo é um conjuto de regras e passos finitos a serem seguindos para a resolução de problema.

## AULA 02 - Iniciando no JavaScript
---

### Declaração de variáveis

```js
const constante = "IMUTÁVEL";
```
Declarar varáveis com a key word `const` não permitá a alteração de seu valor posteriormente.

### Exibir informações no console
```js
console.log(constante);
```

## AULA 03 - Comentários, Strings e Numbers
---

### Comentários
```js
// comentário de linha
```
```js
/*
comentário de block
*/
```
### String
Existem três forma de declarar `strings` em JavaScript, fazendo uso de `""`(aspas duplas), `''`(aspas simples) e ` `` `(crases), que também podemos chamar de `template strings`.

```js
const nome = "Gildinei";
const nome = 'Gildinei';
const nome = `Gildinei`;
```
### Numbers
```js
const idade = 29;
const peso = 114.7
```

## AULA 04 - Fazendo cálculos com JavaScript
---
Criar um programa que receba o nome e a nota de 3 alunos, que calcule a média entre eles, que exiba o nome e nota individual de cada um .

```js
const aluno01 = "Gildinei";
const notaAluno01 = 9.8;

const aluno02 = "Mayk";
const notaAluno02 = 10;

const aluno03 = "Diego";
const notaAluno03 = 2;

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;

console.log(`Aluno ${aluno01}, nota ${notaAluno01}`);
console.log(`Aluno ${aluno02}, nota ${notaAluno02}`);
console.log(`Aluno ${aluno03}, nota ${notaAluno03}`);

console.log(`Média final das notas ${media}`);
```

## AULA 05 - Condicionais
---
Se a média da turma for maior que 5, exiba a nota e parabenize a turma.
```js
if (media > 5) {
    console.log(`Média: ${media}. Se sairam bem, continuem estudando!`);
} else {
    console.log(`Média ${media}. Ainda não, estudem mais um pouco, da pra melhorar.`);
}
```

## AULA 06 - Operadores relacionais e comparativos
---
Igual a
```js
console.log(5 == 4)
```

Igual e do mesmo tipo a
```js
console.log(5 === 4)
```

Diferente de
```js
console.log(5 != 4)
```

Diferente, inclusive do tipo de
```js
console.log(5 !== 4)
```

Maior que
```js
console.log(5 > 4)
```

Menor que
```js
console.log(5 < 4)
```

Menor ou igual a
```js
console.log(5 <= 4)
```

Maior ou igual a
```js
console.log(5 >= 4)
```
Faça uso das condicionais e operadores relacionais para fazer as seguintes verificações, se a idade for maior que 18 deixe entrar, se não, não deixe entrar.
```js
if (idade >= 18) {
    console.log(`${idade} anos, pode entrar.`);
}else {
    console.log(`${idade} anos, não pode entrar.`);
}
```

## AULA 07 - Operadores lógicos e aritméticos
---
### Operadores Lógicos
Operador `&&`(E): As condições devem ser verdadeiras para que o retorno seja verdadeiro.
```js
console.log(5 == 5 && 6 == 6); // true;
console.log(5 == 5 && 6 == 7); // false;
console.log(5 == 4 && 6 == 7); // false;
```

Operador `||`(OU): Uma das condições devem ser verdadeiras para que o retorno seja verdadeiro.
```js
console.log(5 == 5 || 6 == 6); // true
console.log(5 == 5 || 6 == 7); // true
console.log(5 == 4 || 6 == 7); // false
```

Operador `!`(NOT): Nega o retorno de uma condição.
```js
console.log((5 == 5) && (6 == 6)); // true
```

### Operadores Aritméticos
Operador `+` (ADIÇÃO)
```js
console.log(5 + 5);
```

Operador `-` (SUBTRAÇÃO)
```js
console.log(5 - 5);
```

Operador `*` (MULTIPLICAÇÃO)
```js
console.log(5 * 5);
```

Operador `/` (DIVISÃO)
```js
console.log(5 / 5);
```

Operador `%` (RESTO)
```js
console.log(5 % %);
```

# DESAFIO 1 - 1: Primeiros passos com JS

https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-1-primeiros-passos-com-js.md

## Cálculo de IMC
```js
const nome = "Nicole";
const peso = 44;
const altura = 1.54;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`);
} else {
    console.log(`${nome} você não está acima do peso`);
};
```

## Cálculo de IMC

```js
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
```

## AULA 08 - Objetos
---

```js
const aluno01 = {
    nome: "Gildinei",
    nota: 9.8
};

const aluno02 = {
    nome: "Mayk",
    nota: 10
};

const aluno03 = {
    nome: "Diego",
    nota: 2
};

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;
```

## AULA 09 - Vetores
---

```js
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
```

# DESAFIO 1 - 1: Primeiros passos com JS
https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md

## Construção e impressão de objetos
```js
const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: "260"
    }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);
```

## Vetores e objetos

```js
const programador = {
    nome: "Gildinei",
    idade: "29",
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    ],
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);
```