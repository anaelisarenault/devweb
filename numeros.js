const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //confirma que a constante peso1 é um número inteiro (int)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //ajustar a quantidade de casas decimais 
console.log(media.toString) //converte o valor para string 
console.log(media.toString(2)) //converte para binário
console.log(typeof Medica) //retorna o tipo de dado que é 



