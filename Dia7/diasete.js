function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    if (b !== 0) { //verificação adicional
        return a / b;
    } else {
        return "Erro: divisão por zero";
    }
}

function multiplicar(a, b) {
    return a * b;
}

let calculadora = 'on';

while (calculadora !== 'off') {
    let operacao = prompt('Escolha uma operação para executar: "+", "-", "*", "/", ou "sair" ');

    if (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/' && operacao !== 'sair') {
        alert('Insira uma operação válida');
        continue;
    }

    if (operacao === 'sair') {
        calculadora = 'off';
        continue;
    }


    //Try - tratamento de erros: caso o usuário inserir um valor não numérico o código pode quebrar, usa o 'try ... catch' para lidar com excessões.
    try {
        let val1 = Number(prompt('Primeiro valor:'));
        let val2 = Number(prompt('Segundo valor:'));

        let resultado;

        switch (operacao) {
            case "+":
                resultado = somar(val1, val2);
                break;
            case "-":
                resultado = subtrair(val1, val2);
                break;
            case "*":
                resultado = multiplicar(val1, val2);
                break;
            case "/":
                resultado = dividir(val1, val2);
                break;
        }

        alert("Resultado: " + resultado);
    } catch (error) {
        alert("Erro: Insira números válidos.");
    }
}

alert('Até a próxima!');
