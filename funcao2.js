//armazenando uma função dentro de uma variável => MUITO IMPORTANTE
const imprimirSoma = function (a,b) {
  console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel 
const soma = (a,b) => {
  return a + b
}

console.log(soma(2,3))

//retorno implícito (usa o return de forma implícita)
const subtracao = (a,b) => a - b //retorno da função é a-b 
console.log(subtracao(2,3)) // imprime -1