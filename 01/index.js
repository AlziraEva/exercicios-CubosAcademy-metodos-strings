const comentario = "Esse é covid muito perigo."

if (comentario.includes("covid") || comentario.includes("COVID")) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log("Comentário autorizado.")
}