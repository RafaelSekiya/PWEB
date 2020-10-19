// 1° Forma

const aluno = {
    nome: 'Rafael',
    RA: '0030481821026'
}

alert(`1° Forma: ${aluno.nome} ${aluno.RA}`);

// 2° Forma

const aluno2 = new Object();
aluno2.nome = 'Rafael';
aluno2.RA = '0030481821026';

alert(`2° Forma: ${aluno2.nome} ${aluno2.RA}`);

// 3° Forma

const aluno3 = {};
    aluno3['nome'] = 'Rafael';
    aluno3['RA'] = '0030481821026';

alert(`3° Forma: ${aluno3.nome} ${aluno3.RA}`);