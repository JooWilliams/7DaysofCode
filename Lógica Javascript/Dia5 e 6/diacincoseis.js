let frutas = [];
let doces = [];
let laticinios = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let addLista = "sim";
while (addLista != "não") {
    if (frutas.length === 0 && doces.length === 0 && laticinios.length === 0 && congelados.length === 0) {
        addLista = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda sim ou não: ");
    }
    else {
        addLista = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'.");
    }
    while (addLista != "sim" && addLista != "não" && addLista != "remover") {
        alert(`Erro`);
        addLista = prompt("Você deseja adicionar uma comida na sua lista de compras? Responda sim ou não: ");
    }

    if (addLista === "não") {
        break;
    }

    if (addLista === "sim") {
        comida = prompt("Qual alimento você gostaria de inserir?");
        categoria = prompt("Em qual categoria ela se encaixa: frutas, doces, outros, massas, laticínios ou congelados?");
        if (categoria === "frutas") {
            frutas.push(comida);
        }
        else if (categoria === "doces") {
            doces.push(comida);
        }
        else if (categoria === "laticínios") {
            laticinios.push(comida);
        }
        else if (categoria === "congelados") {
            congelados.push(comida);
        }
        else {
            alert("Essa categoria não existe.")
        }
    }
    else if (addLista === "remover") {
        if (frutas.length === 0 && doces.length === 0 && laticinios.length === 0 && congelados.length === 0) {
            alert("A lista está vazia!");
        }
        else {
            remover = prompt(`Lista de compras: \n frutas: ${frutas} \n doces: ${doces} \n laticínios: ${laticinios} \n congelados: ${congelados}`);
            if (frutas.indexOf(remover) != -1) {
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (laticinios.indexOf(remover) != -1) {
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (doces.indexOf(remover) != -1) {
                doces.splice(doces.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if (congelados.indexOf(remover) != -1) {
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
        }
    }
}
alert(`Lista de compras: \n frutas: ${frutas} \n doces: ${doces} \n laticínios: ${laticinios} \n congelados: ${congelados}`);
