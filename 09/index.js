const nome = 'Guido Cerqueira';

function criarNovoNome(nickname) {
    let novoNome = nickname.slice(0, 0) + "@" + nickname.slice(0, 5) + nickname.slice(6, 13)
    novoNome = novoNome.toLocaleLowerCase()
    return novoNome.trim()

}

console.log(criarNovoNome(nome))