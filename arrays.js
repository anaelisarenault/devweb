const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //indice 4 não existe nesse array. Só vai até o valor 3. Não gera erro, mas retorna "undefined"

valores[4] = 10 //adiciona o valor 10 na quarta posição do array 
console.log(valores) // imprime [7.7, 8.9, 6.3, 9.2, 10]
console.log(valore.length)//imprime a quantidade de elementos da array, nesse caso, 5 elementos

valores.push({id: 3}), false, null, 'teste') //adiciona os valor no arry. Imprime [7.7, 8.9, 6.3, 9.2, {id: 3}), false, null, 'teste']
console.log(valores) 
//prezar por separar os tipos de array. Não mmisturar tipos de dados dentro do array. Ex: array denome, array de numeros e etc. 

//p/ excluir um elemento do array
console.log(pop.()) 
delete valores[0] //remove o 7.7 do array 

console.log(typeof valores) //imprime o tipo da varivável. Nesse caso, object. 
