# Iniciando com a programação web
---

### O que é programação?
Programção é o ato de ensinar, passar instruções, ao computador. Podemos chamar essas instruções de algoritmos.

Algoritmo é um conjuto de regras e passos finitos a serem seguindos para a resolução de problema.

## Iniciando no JavaScript
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

## Comentários, Strings e Numbers
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

## Fazendo cálculos com JavaScript
---
Criar um programa que receba o nome e a nota de 3 alunos, que calcule a média entre eles, que exiba o nome e nota individual de cada um .

```js
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

console.log(`Média final das notas ${media}`);
```