const nome = "Ana"
const concatenacao = "Olá" + nome + "!" //se imprimrir fica como Olá Ana!
const template = `
    Olá 
    ${nome}!`   
console.log(template) 
/* imprime:
/* Olá
/* Ana! */ 

//expressões
console.log(`1 + 1 = ${1+1}`) //imprime 1 + 1 = 2 (interpreta apenas o que está entre as chaves)

const up = texto => texto.toUpperCase() 
console.log(`Ei...${up('cuidado')}!`) //imprime Ei...CUIDADO! 
