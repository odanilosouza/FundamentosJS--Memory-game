const { error } = require('console')
const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function questionAsync(texto) {
  return new Promise((resolve, reject) => {
    terminal.question(`${texto} \n`, msg => {
      !!msg ? resolve(msg) : reject(new error('O campo não pode estar vázio'))
    })
  })
}

async function main() {
  try {
    const nome = await questionAsync('Qual é o seu nome?')
    const telefone = await questionAsync('Qual o seu telefone?')
    console.log(`Nome: ${nome}, Telefone: ${terminal}`)
  } catch (error) {
    console.log('Deu Ruim', error.stack)
  } finally {
    terminal.close()
  }
}
main()
