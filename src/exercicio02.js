const readline = require("readline-sync")

const valorDivida = readline.questionFloat("Informe valor da divida: ");

console.log('Valor Divida\tValor Juro\tNumero de Parcelas');

for (let i = 0; i <= 12; i + 3) {
    let valorTotalDivida;
    let valorJuros;
    let valorParcela;
    if (i == 0) {
        valorTotalDivida = valorDivida;
        valorParcela = valorDivida;
        console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
    } else if (i == 3) {
        valorTotalDivida = (valorDivida * 0.10) + valorDivida;
        valorParcela = valorDivida / i;
        console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
    } else if (i == 6) {
        valorTotalDivida = (valorDivida * 0.15) + valorDivida;
        valorParcela = valorDivida / i;
        console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
    } else if (i == 9) {
        valorTotalDivida = (valorDivida * 0.20) + valorDivida;
        valorParcela = valorDivida / i;
        console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
    } else if (i == 12) {
        valorTotalDivida = (valorDivida * 0.25) + valorDivida;
        valorParcela = valorDivida / i;
        console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
    }
}