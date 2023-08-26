let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0")
console.log(identificador)
//---------------------------------------------------------
let novoNome = nome.split(" ")
nome = ""
for (let item of novoNome) {
    let letra1 = item.slice(0, 1)
    let letraResto = item.slice(1)
    nome += letra1.toUpperCase() + letraResto.toLowerCase() + " "
}
nome = nome.trim()
console.log(nome)
//--------------------------------------------------------------------
email = email.trim()
console.log(email)