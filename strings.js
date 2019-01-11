const escola = "UFMG"
console.log(escola.chartAt(3)) //retorna a letra "G" 0 -U, 1-F, 2-M, 3-G
console.log(escola.charAt(4)) //retorna nulo
console.log(escola.charCodeAt(3)) //retorna o valor da letra na tabela unicode HTML
console.log(escola.indexOf('3') // retorna o índice relacionado ao dígito 3 da palavra

console.log(escola.substring(1)) //imprime "F"
console.log(escola.substring(0,3)) //imprime 'U'e 'G'

console.log('Escola'.concat(escola).concat("!")) //imprime Escola UFMG!
// OUUUUUUUUU
console.log("Escola" + escola + "!") //imprime Escola UFMG!

console.log(escola.replace(/\f/, 'e')) //substitui a letra 'f' por E

console.log('Ana,Maria,Pedro'.split(',')) //gera um array com 3 elementos separados pelo caractere ","

