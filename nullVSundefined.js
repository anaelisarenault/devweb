const a = {name: 'Teste'} //imprime {name: 'Teste'}
const b = a //undefined pois a constante a não consegue armazenar o objeto, ela apenas possui o endereço do objeto. 
b.name = 'Ana' 
console.log(a) //imprime {name: "Opa"}

 let c = 3 
 let d = c //d recebe o valor de c 
 // é realizada uma cópia por valor 
 //tipos primitivos = cópia por valor e valores são independentes 
 d++ 
 console.log(c) //imprime 3
 console.log(d) //imprime 4 

 //OUTROS

 let valor //declara a variável mas não define um valor/ não é inicializada

 let valor = null //ausência de valor 

 const produto = {}
 console.log(produto.preco)
 console.log(produto)
 produto.preco = undefined //evite atribur undefined 
 console.log(!!produto.preco) //false
 console.log(preco) //{preco:undefined}

 produto.preco = null //sem preço