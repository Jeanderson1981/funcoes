
const readlineSync = require('readline-sync');

// Fazendo perguntas e armazenando as respostas
const frase = readlineSync.question("Escreva uma frase ")



console.log (frase.toUpperCase())
console.log (frase.replaceaAll("o", "i"))
console.log (frase.length)



