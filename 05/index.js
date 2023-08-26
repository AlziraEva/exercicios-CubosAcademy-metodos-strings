const numeroCartao = '1111222233334444';

let numeroformatado = numeroCartao.slice(0, 4) + "********" + numeroCartao.slice(12)
console.log(numeroformatado)