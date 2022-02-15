class JogoDaMemoria {
  //Se mandar um OBJ = {tela: 1, idade: 2, etc: 3}
  //Vai ignorar o resto das propriedades e pegar somente a propriedade
  //Tela
  constructor({ tela }) {
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
    //Força a tela a usar o THIS de Jogo da Memória
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
  }
  embaralhar() {
    const copias = this.heroisIniciais
      //Duplicar os itens
      .concat(this.heroisIniciais)
      //Entrar em cada item e criar um ID aleatório
      .map(item => {
        return Object.assign({}, item, { id: Math.random() / 0.5 })
      })
      //Ordenar aleatóriamente
      .sort(() => Math.random() - 0.5)
    this.tela.atualizarImagens(copias)
  }

  jogar() {
    this.embaralhar()
  }
}
