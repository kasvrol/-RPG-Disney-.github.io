function derrotaKuzco() {
    while (true) {
        var quer = prompt("1 - Voltar ao Menu. \n 2 - Voltar para o início do jogo.");
        if(quer ==1){
            location.assign('../index.html');
            break;
        }
        else if (quer == 2) {
            location.assign('../kuzco/imperador01.html');
            break;
        }
        alert ('Apenas digite 1 ou 2!');
    }
}
function derrotaTarzan() {
    while (true) {
        var quer = prompt("1 - Voltar ao Menu. \n 2 - Voltar para o início do jogo.");
        if(quer ==1){
            location.assign('../index.html');
            break;
        }
        else if (quer == 2) {
            location.assign('../tarzan/Tarzan01.html');
            break;
        }
        alert ('Apenas digite 1 ou 2!');
    }
}
function derrotaNemo() {
    while (true) {
        var quer = prompt("1 - Voltar ao Menu. \n 2 - Voltar para o início do jogo.");
        if(quer ==1){
            location.assign('../index.html');
            break;
        }
        else if (quer == 2) {
            location.assign('../nemo/nemo01.html');
            break;
        }
        alert ('Apenas digite 1 ou 2!')
    }
}