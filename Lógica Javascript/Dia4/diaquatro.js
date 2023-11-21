const nAdivinhar = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let chute = "";
let acerto = "";

// y = contador
for(let y = 0; y < 3; y++){
    chute = prompt ("Tente adivinhar o número de 0 a 10: ");
    if (chute == nAdivinhar){
        alert (`Parabéns, você adivinhou! `);
        acerto = true;
        break;
    }
    alert ("Errado!");
}
if (!acerto){
    alert(`Que pena, você errou. O número era ${nAdivinhar}`);
}