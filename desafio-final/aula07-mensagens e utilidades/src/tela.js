// Métodos estáticos não podem acessar o `this`
//Por isso, não vamos colocar o util no construtor
const util = Util

const ID_CONTEUDO = 'conteudo'
const ID_BTN_JOGAR = 'jogar'
const ID_MENSAGEM = 'mensagem'
const CLASSE_INVISIVEL = 'invisible'
const ID_CARREGANDO = 'carregando'
const ID_CONTADOR = 'contador'

const mensagem = {
  sucesso: {
    texto: 'Combinação correta!',
    classe: 'alert-success'
  },

  erro: {
    texto: 'Combinação Incorreta!!',
    classe: 'alert-danger'
  }
}

class Tela {
  static obterCodigoHtml(item) {
    return `<div class="col-md-3">
    <div class="card" style="width: 50%" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
      <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="..." />
    </div>
    <br/>
  </div>`
  }
  static configurarBotaoVerificarSelecao(funcaoOnclick) {
    window.verificarSelecao = funcaoOnclick
  }
  static alterarConteudoHtml(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHtml
  }
  static gerarStringHTMLPelaImagem(itens) {
    // Para cada intem na lista, Vai executar a função obterCodigoHtml
    // Ao final, vai concatenar tudo em uma unica string
    //Mudar Array para string
    return itens.map(Tela.obterCodigoHtml).join('')
  }
  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
    Tela.alterarConteudoHtml(codigoHtml)
  }

  static configurarBotaoJogar(funcaoOnclick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR)
    btnJogar.onclick = funcaoOnclick
  }
  static exibirHerois(nomeDoHeroi, img) {
    const elementosHtml = document.getElementsByName(nomeDoHeroi)
    //Para cada elemento encontrado na tela, vamos alterar a imagem, para cada imagem inicial dele
    //Com o forRach, para cada item, dentro dos () setamos o valor de imagem
    elementosHtml.forEach(item => (item.src = img))
  }
  static async exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM)
    if (sucesso) {
      elemento.classList.remove(mensagem.erro.classe)
      elemento.classList.add(mensagem.sucesso.classe)
      elemento.innerText = mensagem.sucesso.texto
    } else {
      elemento.classList.remove(mensagem.sucesso.classe)
      elemento.classList.add(mensagem.erro.classe)
      elemento.innerText = mensagem.erro.texto
    }
    elemento.classList.remove(CLASSE_INVISIVEL)
    await util.timeout(1000)
    elemento.classList.add(CLASSE_INVISIVEL)
  }
  static exibirCarregando(monstrar = true) {
    const carregando = document.getElementById(ID_CARREGANDO)
    if (monstrar) {
      carregando.classList.remove(CLASSE_INVISIVEL)
      return
    }
    carregando.classList.add(CLASSE_INVISIVEL)
  }
}
