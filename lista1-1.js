import leia from "readline-sync";

let A, B, C, soma;


A = leia.questionInt('Digite o valor de A: ');
B = leia.questionInt('Digite o valor de B: ');
C = leia.questionInt('Digite o valor de C: ');
soma = A + B

if (soma > C) {
    console.log('A soma de A + B eh MAIOR do que C')
} else if (soma < C) {
    console.log('A soma de A + B eh MENOR do que C');
} else {
    console.log('A soma de A + B eh IGUAL a C');
}