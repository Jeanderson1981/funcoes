
const professor = {
    nome: 'Vitor',
    idade: 27,
    email: 'vitor@hotmail.com',
    tarefas :[ 'dar aula','responder duvidas'   ],
    contarpiada:function(){
        console.log('e pa ve ou pa cume')
    }

}
// notacao de colchetes 
 console.log (professor["email"]   )

// aleracao de valores 
professor.nome= 'mika'
professor['email']= 'profmika.homail.com'

