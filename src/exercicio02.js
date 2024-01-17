 //const readline = require("readline-sync")

// const valorDivida = readline.questionFloat("Informe valor da divida: ");

// console.log('Valor Divida\tValor Juro\tNumero de Parcelas');

// for (let i = 0; i <= 12; i + 3) {
//     let valorTotalDivida;
//     let valorJuros;
//     let valorParcela;
//     if (i == 0) {
//         valorTotalDivida = valorDivida;
//         valorParcela = valorDivida;
//         console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
//     } else if (i == 3) {
//         valorTotalDivida = (valorDivida * 0.10) + valorDivida;
//         valorParcela = valorDivida / i;
//         console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
//     } else if (i == 6) {
//         valorTotalDivida = (valorDivida * 0.15) + valorDivida;
//         valorParcela = valorDivida / i;
//         console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
//     } else if (i == 9) {
//         valorTotalDivida = (valorDivida * 0.20) + valorDivida;
//         valorParcela = valorDivida / i;
//         console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
//     } else if (i == 12) {
//         valorTotalDivida = (valorDivida * 0.25) + valorDivida;
//         valorParcela = valorDivida / i;
//         console.log(`${valorTotalDivida}\t${valorJuros}\t${i}\t${valorParcela.toFixed(2)}`)
//     }
// }



/// REFATORAR
const { questionFloat } = require('readline-sync');
const { imprimeValoresParcela } = require('./functions-utils')
 
 
const valorDivida = questionFloat("Informe o valor da dívida: ");
 
console.log('Vlr Dívida\tVlr Juros\tNum Parcelas\tVlr Parcela');
 
let percentualJuros = 0;
let numParcelas = 0;
 
for (let parcela = 0; parcela <= 12; parcela = parcela + 3) {
  if (parcela == 0) {
    numParcelas = parcela + 1;
    percentualJuros = 0;
  } else if (parcela == 3) {
    numParcelas = parcela;
    percentualJuros = 10;
  } else if (parcela == 6) {
    numParcelas = parcela;
    percentualJuros = 15;
  } else if (parcela == 9) {
    numParcelas = parcela;
    percentualJuros = 20;
  } else if (parcela == 12) {
    numParcelas = parcela;
    percentualJuros = 25;
  }
  imprimeValoresParcela(valorDivida, numParcelas, percentualJuros);
}