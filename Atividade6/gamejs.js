function Escolha() {
    const escolha = Math.floor(Math.random() * 3);
    console.log(escolha);
    switch (escolha) {
        case 0:
            return 'Pedra';
        case 1:
            return 'Papel';
        case 2:
            return 'Tesoura';
    }
}
function jokenpo(objeto) {
    const computador = Escolha();
    const saida = 'Você: ' + objeto + '\nOponente: ' + computador + '\n';

    if (objeto === computador) {
        alert(saida + 'Empate!');
        
    }
    if (
        objeto === 'Papel' && computador === 'Pedra' ||
        objeto === 'Pedra' && computador === 'Tesoura'||
        objeto === 'Tesoura' && computador === 'Papel'
    ) {
        alert(saida + 'Vitória!');
    }
    else {
        alert(saida + 'Derrota!');
    }
}