alert('Boas vindas ao jogo do número secreto!');

// número a ser adivinhado
let numeroSecreto = 29;
// entrada do usuário para testar o número
let chute = prompt('Escolha um número entre 1 e 30');

// se a entrada do usuário for igual ao número a ser adivinhado
if (numeroSecreto == chute) {
    console.log('Você acertou! (' + numeroSecreto + ')');
}
