alert('Boas vindas ao jogo do número secreto!');

// número a ser adivinhado
let numeroSecreto = 9;
console.log(numeroSecreto);
// entrada do usuário para testar o número
let chute = prompt('Escolha um número entre 1 e 10');

// se a entrada do usuário for igual ao número a ser adivinhado
if (numeroSecreto == chute) {
    alert(`Você acertou! (${numeroSecreto})`);
} else {
    alert('Você errou :(');
}
