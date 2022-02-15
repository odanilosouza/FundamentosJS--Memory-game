const heroi = {
  nome: 'Flash',
  idade: 100,
  sexo: 'Masculino'
}

//console.log('nome', heroi.nome)
//console.log('idade', heroi['idade'])
//console.log('sexo', heroi.sexo)
// console.log('Não existe', heroi.naoExiste)
// heroi.id = 0001
// console.log(heroi)

//Saber as chaves do objeto
console.log(Object.keys(heroi))

//Saber os valores

console.log(Object.values(heroi))

//Juntar dois objetos

const pessoa = {
  tamanho: '10 metros'
}
const novoObj = Object.assign(heroi, pessoa)
delete novoObj.nome
console.log(novoObj)
