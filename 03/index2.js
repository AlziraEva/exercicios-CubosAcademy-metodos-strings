const texto = "Aprenda programar do zero na Cubos Academy";

const dividiTexto = texto.split(" ")
console.log(dividiTexto)
let novoTexto = ""

for (let item of dividiTexto) {
    if (item === item[0]) {
        novoTexto += item
    } else {
        novoTexto += "-" + item
    }
}
console.log(novoTexto)