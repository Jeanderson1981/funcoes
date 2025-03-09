const donoDoPet = {
   nome: "vitor hugo",
   pet : {

        nomeDoPet: "wanda",
        raca :"via lata",
        idade: 1
   }

}
console.log (donoDoPet.pet.nomeDoPet)

const curso = {

    nome: "noturno frontend",
    linguagens: [ "Java ","CCS ", 'Httml']

}
console.log (curso.linguagens[0])

//Arrays dentro de Objeto

let professores = [

{nome: "Andrei", modulo: 1},
{nome: "Vitor", modulo: 2},
{nome: "Mina", modulo: 3},
]

console.log (professores [1].nome)

//adicionar propriedades

const cursos =  {
    nome: "frontEnd",
    linguage:  'JS',

    cursos.NovoCurso = "TypeScript",

}
console.log (cursos)