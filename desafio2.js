// 1
let diaSemana = prompt('Qual o dia da semana: ');

if (diaSemana === 'Domingo' || diaSemana === 'Sábado') {
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}

// 2
let numero = prompt('Digite um número entre -10 e 10');

if (numero < 0) {
    alert('Número negativo');
} else {
    alert('Número positivo')
}

// 3
let pontuacao = 100;

if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar');
}

// 4
let saldoConta = 1500.40;
let nomeUsuario = prompt('Digite seu nome: ');

alert(`Olá ${nomeUsuario}! Seu saldo é: ${saldoConta}`);

// 5
let nome = prompt('Digite seu nome: ');

alert(nome + ', seja bem vindo(a)!');


