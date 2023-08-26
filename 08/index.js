const cpf = "011.022.033-44/0000-999";

function remover(cpfOuCnpj) {
    const expressoes = [".", "-", "/"]
    let novoCpfOuCnpj = cpfOuCnpj
    for (let item of expressoes) {
        while (novoCpfOuCnpj !== novoCpfOuCnpj.replace(item, "")) {
            novoCpfOuCnpj = novoCpfOuCnpj.replace(item, "")
        }
    }
    return novoCpfOuCnpj
}

console.log(remover(cpf))