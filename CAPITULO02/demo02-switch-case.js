const readline = require('readline')
const terminal = readline.createInterface({
  //Definir o modo de entrada via terminal
  input: process.stdin,
  //Todo texto de saída sairá via terminal
  output: process.stdout
})

//Texto do menu
const textoMenu = `
Olá seja bem-vindo ao sustema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de horóis
Digite 3 para acessar o menu de guerreiros
Digite 0 para sair...`

console.log('textoMenu', textoMenu)
// const opcao = 2
// switch (opcao) {
//   case 1:
//     console.log('Pressionou 1')
//     break
//   case 2:
//     console.log('Pressionou 2')
//     break
//   default:
//     console.log('Opção inválida...')
// }

// terminal.question('Qual o seu nome? ', msg => {
//   console.log('Você escreveu:', msg)
//   terminal.close()
// })

const questoes = {
  menuInicial: {
    texto: textoMenu,
    fn: menuInicial
  },
  opcao1: {
    texto: 'Submenu, Pressione enter para mais opções...',
    fn: opcao1
  }
}

function opcao1(msg) {
  console.log('Não há mais opções!')
  terminal.close()
}
function menuInicial(msg) {
  const opcao = Number(msg)
  if (isNaN(opcao)) {
    throw new Error('Não é um número', msg)
  }
  switch (opcao) {
    case 0:
      console.log('Saindo...')
      terminal.close()
      break
    case 1:
      console.log('Menu Inicial')
      terminal.question(questoes.opcao1.texto, questoes.opcao1.fn)
      break
    default:
      console.log('Opção inválida...')
      terminal.close()
      break
  }
}

//Exercício
// switch (true) {
//   case 1 < 2:
//     console.log('1 < 2')

//   case 1 === 1:
//     console.log('1 === 1')

//   default:
//     console.log('pode ter mais de uma opção')
// }

switch (0) {
  default:
    console.log('Funciona sem case!')
}

terminal.question(questoes.menuInicial.texto, questoes.menuInicial.fn)
