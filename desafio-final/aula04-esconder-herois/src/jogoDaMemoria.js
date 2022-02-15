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
    this.iconePadrao = './arquivos/padrao.png'
    this.heroisEscondidos = []
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
    //Vamos esperar 1 segundo para atualizar a tela
    setTimeout(() => {
      this.esconderHerois(copias)
    }, 1000)
  }
  esconderHerois(herois) {
    //Vamos trocar a imagem de todos os herois existentes pelo icone padrão
    //Como fizemos no construtor, vamos extrair somente o necessário

    //usando a sintaxe ({chave: 1}) estamos falando que vamos retornar o que tiver
    //dentro dos parenteses
    //Quando não usamos ":" (exemplo do id), o JS entende que o nome é o mesmo valor.
    //Ex. id: id, vira id,
    const heroisOcultos = herois.map(({ nome, id }) => ({
      id,
      nome,
      img: this.iconePadrao
    }))
    //Atualizar a tela com os herois ocultos
    this.tela.atualizarImagens(heroisOcultos)
    //Guardamos os herois para trabalhar com eles depois
    this.heroisOcultos = heroisOcultos
  }

  jogar() {
    this.embaralhar()
  }
}
