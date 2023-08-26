const nomeArquivo = 'Foto da Familia.png';
// São permitidos arquivos: jpg, jpeg, gif e png;
function tipoDeArquivo(arquivo) {
    if (nomeArquivo.includes(".png") || nomeArquivo.includes(".gif") || nomeArquivo.includes(".jpeg") || nomeArquivo.includes(".jpg")) {
        return "Arquivo válido"
    } else {
        return "Arquivo inválido"
    }

}

console.log(tipoDeArquivo(nomeArquivo))