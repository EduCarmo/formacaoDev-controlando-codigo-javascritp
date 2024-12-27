const trabalho1  = true
const trabalho2  = true

const comprarTv50 = trabalho1 && trabalho2 // AND
const comprarTv40 = trabalho1 != trabalho2 // XOR
const tomarSoervete = trabalho1 || trabalho2 // OR
// const ficarEmCasa = !trabalho1 && !trabalho2 // 
const ficarEmCasa = !tomarSoervete // NOT

console.log('Vamos comprar a TV de 50"? ', comprarTv50)
console.log('Vamos comprar a TV de 40"? ', comprarTv40)
console.log('Vamos comprar sorvete ? ', tomarSoervete)
console.log('Vamos ficar em casa? ', ficarEmCasa)
