class JogoDaMemoria {
  //Se mandar um OBJ = {tela: 1, idade: 2, etc: 3}
  //Vai ignorar o resto das propriedades e pegar somente a propriedade
  //Tela
  constructor({ tela }) {
    debugger
    this.tela = tela

    this.heroisIniciais = [
      //Caminho do arquivo, sempre relativo ao index.html
      { img: './arquivos/batman.png', name: 'batman' },
      { img: './arquivos/flash.png', name: 'flash' },
      { img: './arquivos/miranha.png', name: 'miranha' },
      { img: './arquivos/superman.png', name: 'superman' }
    ]
  }
  // Para usar o This, não podemos usar o static
  inicializar() {
    //Vai pegar todas as funções da classe tela!
    //Coloca todos os herois na tela this.tela.atualizarImagens(this.heroisIniciais)
    this.tela.atualizarImagens(this.heroisIniciais)
  }
}
