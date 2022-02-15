// //Meses começam com zero
// const dataAniversario = new Date(2020, 0, 20)
// console.log(dataAniversario)

// const primeiraDataDoJs = new Date(0)
// //console.log(primeiraDataDoJs.getTime(0))

const hoje = new Date()
// //console.log(hoje.toString())  => Trás as info assim: Tue Jan 18 2022 10:22:15 GMT-0300 (Horário Padrão de Brasília)
// console.log(hoje.toLocaleDateString())

// //Formatoglobal recomendado!
// console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5)
hoje.setHours(10, 30, 0)
console.log(`
    Dia: ${hoje.getDate()}
    mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)
