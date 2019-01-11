let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! não   !! não não 

//tudo isso resulta em verdadeiro 
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
// final dos verdadeiros 

//tudo isso resulta em falsos
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
//final dos falsos

console.log(!!('' || null || 0 || ' ' )) //retorna true  || = ou 
console.log(('' || null || 0 || 'aninha' )) //retorna o único vaor verdadeiro, nesse caso, "aninha"


