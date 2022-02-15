// console.log('Keys', Object.keys({ nome: 'Scott' }))
// console.log('values', Object.values({ nome: 'Scott' }))
// console.log('now', Date.now())
// console.log('randow', Math.random())

// //Global
// console.log('global', global)

//Desafio 1
animal = {
  _idade: '123',
  set idade(valor) {
    this._idade = valor
  }
}
animal.idade = 10

console.log(animal.idade)

//Desafio 2
animal = {
  _id: '123',
  get id() {
    return this._id
  }
}
console.log(animal.id)
