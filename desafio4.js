// 1
console.log('Olá desafio.');

// 2
let nome = "Danilo";
console.log(`Olá, ${nome}!`);

// 3
alert(`Olá, ${nome}!`);

// 4
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

// 5
let valor1 = 10;
let valor2 = 30;

let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);

// 6
let valorNumero1 = 10;
let valorNumero2 = 30;

let res = valorNumero1 + valorNumero2;
console.log(`A soma de ${valorNumero1} + ${valorNumero2} é igual a ${res}`);

// 7
let idade = prompt('Insira a sua idade');
console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade');

// 8
let numero = prompt('Insira um número: ');
if (numero > 0) {
    console.log('Número positivo.');
} else if (numero < 0) {
    console.log('Número negativo.');
} else {
    console.log('O número é zero');
}

// 9
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 10
let nota = 9;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// 11
console.log(Math.random());

// 12
console.log(Math.random() * 10 + 1);

// 13
console.log(Math.random() * 1000 + 1);
