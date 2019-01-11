//função => bloco de código nomeado
//recebe parâmetros de entrada e executa o algoritmo que retorna um final 

//FUNCAO SEM RETORNO
function imprimirSoma(a,b) {
  console.log(a+b)
}

imprimirSoma(2,3) //imprime 5
imprimirSoma(2) //NaN
imprimirSoma(2, 10, 20, 30, 40) //imprime 12
imprimirSoma() //NaN

//funcao com retorno
function soma(a,b = 0) {
	return a + b
}
//para imprimir precisa colocar console.log() 
console.log(soma(2,3))
console.log(soma(2)) //retorna 3 
console.log(soma()) //NaN  pois o primeiro valor não foi tratado

