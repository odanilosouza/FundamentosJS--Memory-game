class JogoDaMemoria {
  //Se mandar um OBJ = {tela: 1, idade: 2, etc: 3}
  //Vai ignorar o resto das propriedades e pegar somente a propriedade
  //Tela
  constructor({ tela, util }) {
    this.tela = tela
    this.util = util

    this.heroisIniciais = [
      //Caminho do arquivo, sempre relativo ao index.html
      { img: './arquivos/batman.png', nome: 'batman' },
      { img: './arquivos/flash.png', nome: 'flash' },
      { img: './arquivos/miranha.png', nome: 'miranha' },
      { img: './arquivos/superman.png', nome: 'superman' }
    ]
    this.iconePadrao = './arquivos/padrao.png'
    this.heroisEscondidos = []
    this.heroisSelecionados = []
  }
  // Para usar o This, não podemos usar o static
  inicializar() {
    //Vai pegar todas as funções da classe tela!
    //Coloca todos os herois na tela this.tela.atualizarImagens(this.heroisIniciais)
    this.tela.atualizarImagens(this.heroisIniciais)
    //Força a tela a usar o THIS de Jogo da Memória
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    this.tela.configurarBotaoMostrarTudo(
      this.mostrarHeroisEscondidos.bind(this)
    )
  }
  async embaralhar() {
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
    this.tela.exibirCarregando()
    const idDoIntervalo = this.tela.iniciarContador()
    //Vamos esperar 3 segundo para atualizar a tela
    await this.util.timeout(3000)
    this.tela.limparContador(idDoIntervalo)
    this.esconderHerois(copias)
    this.tela.exibirCarregando(false)
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
    this.heroisEscondidos = heroisOcultos
  }
  exibirHerois(nomeDoHeroi) {
    //Vamos procurar esse jeroi pelo nome em nossos herois iniciais
    //Vamos obter somente a imagem dele
    const { img } = this.heroisIniciais.find(({ nome }) => nomeDoHeroi === nome)
    //Vamos criar a função na tela, para exibir somente o heroi selecionado
    this.tela.exibirHerois(nomeDoHeroi, img)
  }

  verificarSelecao(id, nome) {
    const item = { id, nome }
    //Vamos verificar a quantidade de heróis selecionados
    //e tomar ação se escolheu certo ou errado
    const heroisSelecionados = this.heroisSelecionados.length
    switch (heroisSelecionados) {
      case 0:
        //adiciona a escolha na lista, esperando pela próxima clicada
        this.heroisSelecionados.push(item)
        break
      case 1:
        //Se a quatidade for 1, significa que a quantidade só pode ser mais 1
        const [opcao1] = this.heroisSelecionados
        //Zerar itens para não selecionar mais de dois
        this.heroisSelecionados = []
        //Conferimos se os nomes e ids batem conforme o esperado
        if (
          opcao1.nome === item.nome &&
          //Aqui verifcamos se são ids diferentes para o usuário não clicar duas vezes no mesmo
          opcao1.id !== item.id
        ) {
          this.exibirHerois(item.nome)
          //Como o padrão é True, não precisa passar nada
          this.tela.exibirMensagem()
          //Parar a execução
          return
        }
        this.tela.exibirMensagem(false)
        //Fim do case
        break
    }
  }
  mostrarHeroisEscondidos() {
    //Vamos pegar todos os herois na tela e colocar seus respectivos valores correto
    const heroisEscondidos = this.heroisEscondidos
    for (const heroi of heroisEscondidos) {
      const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
      heroi.img = img
    }
    this.tela.atualizarImagens(heroisEscondidos)
  }
  jogar() {
    this.embaralhar()
  }
}
