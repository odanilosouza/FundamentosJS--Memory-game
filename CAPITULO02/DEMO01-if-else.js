// let frutaExistenteNoMercado = false
// let temCPUsufuciente = true

// // Obter valor do terminal
// const args = process.argv
// const saldo = args[args.length - 1]
// console.log('args', args)
// console.log('Saldo', saldo)

// if (isNaN(saldo)) {
//   console.log('Número inválido!!')
//   return
// }

// let tipoCliente = 'premium'
// if (saldo < 9) {
//   tipoCliente = 'basic'
// } else if (saldo >= 10 && saldo < 20) {
//   tipoCliente = 'gold'
// } else {
//   tipoCliente = null
// }
// //null, indefined, vazio, 0  === false!
// if (!tipoCliente) {
//   tipoCliente = 'indefinido'
// }
// console.log('tipoCliente', tipoCliente)

// //Teste
// const resultado = 1
//   ? null || (1 != '1' ? 'Hello world!' : 'Hackerzao')
//   : 'não zero'

// console.log('Resul:', resultado)
//Operador ternário
// //const item = !0 ? '2a' : '3b'
// const item = 'abc'
// console.log(isNaN(item) ? 'Hey jude' : 'Hey Julia')

// console.log(item)

let valor = 5

if (valor < 2 || valor > 4) {
} else if (valor < 5) {
} else {
}

const item = '0'
console.log(!!item)
