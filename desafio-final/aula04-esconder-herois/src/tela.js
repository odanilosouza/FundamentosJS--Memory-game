const ID_CONTEUDO = 'conteudo'
const ID_BTN_JOGAR = 'jogar'

class Tela {
  static obterCodigoHtml(item) {
    return `<div class="col-md-3">
    <div class="card" style="width: 50%">
      <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="..." />
    </div>
    <br/>
  </div>`
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
}
