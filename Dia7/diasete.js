// Funções para cada operação
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero";
    }
}

// Loop principal da calculadora
while (true) {
    // Opções disponíveis
    console.log("Escolha a operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");

    // Solicitar escolha do usuário
    var escolha = prompt("Digite o número da operação desejada:");

    // Sair do loop se a escolha for 5
    if (escolha === '5') {
        console.log("Até a próxima!");
        break;
    }

    // Solicitar dois números
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));

    // Verificar a escolha do usuário e realizar a operação correspondente
    switch (escolha) {
        case '1':
            var resultado = soma(num1, num2);
            break;
        case '2':
            var resultado = subtracao(num1, num2);
            break;
        case '3':
            var resultado = multiplicacao(num1, num2);
            break;
        case '4':
            var resultado = divisao(num1, num2);
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            continue;
    }

    // Exibir o resultado
    console.log("Resultado: " + resultado);
}
