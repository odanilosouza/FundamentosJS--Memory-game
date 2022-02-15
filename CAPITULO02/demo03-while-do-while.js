//Enquanto não muda, não para
let termoDeParada = true
let contador = 0

while (termoDeParada) {
  termoDeParada = contador < 10
  if (contador % 2 === 0) {
    console.log('Numero par', contador)
  }
  contador += 1
}

//Roda a primeira vez e testa a variável depois
do {
  console.log('Só um vez!! pois o termo de parada é: ', termoDeParada)
} while (termoDeParada)
