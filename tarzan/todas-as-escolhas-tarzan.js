function tarzan01() {
    while (true) {
        var escolha = prompt("1 - Tentar assustar os elefantes para o outro lado. \n 2 - Correr ao máximo e tentar tirar os filhotes do caminho.");
        if(escolha ==1){
            location.assign('Tarzan02.html');
            break;
        }
        else if (escolha ==2) {
            location.assign('../gameover/gameover-tarzan.html');
            break;}
        alert ('Apenas digite 1 ou 2!');
    }
}
function tarzan02() {
    while (true) {
        var escolha = prompt("1 - Tarzan se aproximar ao máximo da mãe dos filhotes para os devolver e ela ver que ele não os fará mal. \n 2 - Tarzan deixa os filhotes no chão para a mãe não o atacar e foge.");
        if(escolha ==1){
            location.assign('../gameover/gameover-tarzan.html');
            break;
        }
        else if (escolha ==2) {
            location.assign('Tarzan03.html');
            break;
        }
        alert ('Apenas digite 1 ou 2!');
    }
}
function tarzan03() {
    while (true) {
        var escolha = prompt("1 - Tarzan dá seu berro para chamar Jane e ver se ela está segura fora da barraca.\n 2 - Tarzan entra na barraca a procura de Jane.");
        if(escolha ==1){
            location.assign('../vitoria/vitoria-tarzan.html');
            break;
        }
        else if (escolha == 2) {
            location.assign('../gameover/gameover-tarzan.html');
            break;
        }
        alert ('Apenas digite 1 ou 2!');
    }
}