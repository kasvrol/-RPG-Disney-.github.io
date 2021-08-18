function nemo01() {
    while (true) {
        var escolha = prompt("1 - Marlin e Dory nadam até a barracuda e perguntam se ela viu Nemo. \n 2 - NADA! NADA! NADA, DORY!");
        if(escolha ==1){
            location.assign('gameover-nemo.html');
            break;
        }
        else if (escolha == 2) {
            location.assign('nemo02.html');
            break;
        }
        else {
            alert ('Apenas digite 1 ou 2!');
            break;
        }
    }
}
function nemo02() {
    while (true) {
        var escolha = prompt("1 - Tudo bem. Bruce é vegano, não precisa ter medo. \n 2 - NADA! NADA! NADA, DORY!");
        if(escolha ==1){
            location.assign('gameover-nemo.html');
            break;
        }
        else if (escolha == 2) {
            location.assign('nemo03.html');
            break;
        }
        else {
            alert ('Apenas digite 1 ou 2!');
            break;
        }
    }
}

function nemo03() {
    while (true) {
        var escolha = prompt("1 - Marlin e Dory berram por Nemo na frente de todos para tentar encontra-lo. \n 2 - Esperam perto dos outros pais na esperança que Nemo apareça.");
        if(escolha ==1){
            location.assign('gameover-nemo.html');
            break;
        }
        else if (escolha == 2) {
            location.assign('vitoria-nemo.html');
            break;
        }
        else {
            alert ('Apenas digite 1 ou 2!');
            break;
        }
    }
}