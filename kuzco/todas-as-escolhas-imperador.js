function imperador01() {
    while (true) {
        var escolha = prompt("1 - Pede ajuda ao camponês Patcha para tentar voltar ao palácio. \n 2 - Vê a selva à frente e tenta atravessar sozinho sem a ajuda do camponês Patcha.");
        if(escolha ==1){
            location.assign('imperador02.html');
            break;
        }
        else if (escolha == 2) {
            location.assign('gameover-kuzco.html');
            break;
        }
        else {
            alert ('Apenas digite 1 ou 2!');
            break;
        }
    }
}
function imperador02() {
    while (true) {
        var escolha = prompt("1 - Tentam subir juntos lado a lado pelo penhasco. \n 2 - Kuzco se agarra na corda e tenta subir sozinho sem ajudar Patcha.");
        if(escolha ==1){
            location.assign('imperador03.html');
            break;
        }
        else if (escolha == 2) {
            location.assign('gameover-kuzco.html');
            break;
        }
        else {
            alert ('Apenas digite 1 ou 2!');
            break;
        }
    }
}
function imperador03() {
    while (true) {
        var escolha = prompt("1 - Kuzco toma todos os frascos até conseguir achar o antídoto e volta a ser humano. \n 2 - Kuzco faz Patcha tomar todos os frascos de poções e passar a ser vários animais até conseguir encontrar o antídoto.");
        if(escolha ==1){
            location.assign('vitoria-kuzco.html');
            break;
        }
        else if (escolha == 2) {
            location.assign('gameover-kuzco.html');
            break;
        }
        else {
            alert ('Apenas digite 1 ou 2!');
            break;
        }
    }
}