alert('Boas vindas ao jogo do número secreto!');

// range para aumentar a dificuldade da aleatoriedade
let numeroDificuldade = 100;

// número a ser adivinhado
let numeroSecreto = parseInt(Math.random() * numeroDificuldade + 1) ; // Agora gerado aleatoriamente
console.log(numeroSecreto);

let chute = 1;
let tentativas = 1;

// enquanto chute for diferente de numeroSecreto
while (chute != numeroSecreto) {
    // entrada do usuário para testar o número
    chute = prompt(`Escolha um número entre 1 e ${numeroDificuldade}`);
    // se a entrada do usuário for igual ao número a ser adivinhado
    if (chute != numeroSecreto) {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
    } else {
        break;
    }
    // tentativas = tentativas + 1;
    tentativas++;
}

alert(`Você acertou! (${numeroSecreto}), com ${tentativas} ${tentativas == 1 ? 'tentativa' : 'tentativas'}.`);
