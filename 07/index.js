const email = "aluno@cubo.sacademy.";


if (email.indexOf(".") === 0 || email.lastIndexOf(".") === email.length - 1) {
    console.log("email inválido")
}
else if (email.includes("@") && email.includes(".")) {
    console.log("email valido")
} else {
    console.log("email inválido")
}