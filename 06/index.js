const celular = 99918888;

let novoCelular = celular.toString()

if (novoCelular.length === 11) {
    novoCelular = novoCelular.slice(0, 0) + ("(") + novoCelular.slice(0, 2) + (")") + " " + novoCelular.slice(2, 3) + " " + novoCelular.slice(3, 6) + "-" + novoCelular.slice(6)
    console.log(novoCelular)
} else if (novoCelular.length === 10) {
    novoCelular = novoCelular.slice(0, 0) + ("(") + novoCelular.slice(0, 2) + (")") + " " + "9" + " " + novoCelular.slice(2, 6) + "-" + novoCelular.slice(6)
    console.log(novoCelular)

} else if (novoCelular.length === 8) {
    novoCelular = "9" + " " + novoCelular.slice(0, 4) + "-" + novoCelular.slice(4)
    console.log(novoCelular)
}