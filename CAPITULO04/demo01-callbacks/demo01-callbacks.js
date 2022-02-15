const fs = require('fs')

fs.readFile('./arq1.txt', (errorArq1, respostaArq1) => {
  if (errorArq1) {
    console.error('Deu Ruim arq1', errorArq1)
    return
  }
  fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
    if (errorArq2) {
      console.error('Deu Ruim Arq2', errorArq2)
      return
    }
    fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
      if (errorArq3) {
        console.error('Deu Ruim Arq2', errorArq3)
        return
      }
      const conteudo = `${respostaArq1}, ${respostaArq2}, ${respostaArq3}`
      fs.writeFile('./final.txt', conteudo, (erroWrite, respostaWrite) => {
        if (erroWrite) {
          console.error('Deu Ruim na Gravação', erroWrite)
          return
        }
        console.log('Arquivo Salvo com Sucesso!!!')
      })
    })
  })
})
