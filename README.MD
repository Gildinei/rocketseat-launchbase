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