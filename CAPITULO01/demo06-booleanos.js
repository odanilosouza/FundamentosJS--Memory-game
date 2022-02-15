const podeDirigir = false
if (podeDirigir) {
  console.log('Ela pode dirigir')
}

const saldoEmConta = 1
if (!saldoEmConta) {
  console.log('não tem saldo')
}

const boolComtring = 'ae hacjerzão!!'
//Força o valor true ou false
// De acordo com a tabela
console.log('boolComtring', !!boolComtring)

//Negação
console.log('negação', !boolComtring)

//Negação + forlar a boolean
console.log('negação com booleano', !!!boolComtring)

console.log(!!'0')
