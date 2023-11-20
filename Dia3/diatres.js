const area = prompt("Qual área você quer seguir, Front-end ou Back-end? Digite o nome da área:")
let lang ="";

if(area === "Front-end"){
    lang = prompt("Você gostaria de aprender React ou Vue?");
}
else if(area === "Back-end"){
    lang = prompt("Você gostaria de aprender C# ou Java?");
}
else {
    alert ("Área inválida!");
}

//Se especializar na área ou seguir Fullstack
const Especializar_Fullstack = prompt ("Digite 1 se deseja se especializar na área escolhida ou 2 para se tornar Fullstack: ");

if (Especializar_Fullstack == 1) {
    alert(`continue se especializando em ${lang} para dominar o ${area}! `);
}
else if ( Especializar_Fullstack == 2 ){ 
    alert (`Que tal procurar e desenvolver novas linguagens além de ${lang} para se tornar Fullstack?`);
}
else {
    alert ("Este valor não é válido");
}

//Mais tecnologias
let msg = prompt("Gostaria de aprender alguma nova tecnologia? Digite sim ou não");
while (msg === "sim" ) {
    let nTec = prompt ("Quais?");
    alert (`${nTec} realmente é incrível!`);
    msg = prompt ("Gostaria de aprender alguma nova tecnologia? Digite sim ou não");
}