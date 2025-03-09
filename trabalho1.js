const readlineSync = require('readline-sync');

let abrigos = [ 
    {
        nome: 'nome',
        endereco: 'endereço',
        telefone: 'fone',
        capacidade: 'capacidade',
        cidade: 'cidade',
    }, 
   
]

let i = 0
function cadastrarAbrigo (){

    // cadastro com a entrada de dados digitada pelo usuario

console.log("Cadastro")
 let nome = readlineSync.question ("Nome:")
 let endereco = readlineSync.question ("Endereço:")
 let telefone = readlineSync.question ("Telefone:")
 let capacidade = readlineSync.question ("Capacidade:")
 let cidade = readlineSync.question ("Cidade:")

let info = {
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    capacidade: capacidade,
    cidade: cidade,
}

abrigos.push(info)
}

//listagem de abrigos 

function listarAbrigos () {

    abrigos.forEach (info =>  {        
      i = i+1  
      
    console.log( (i),"|          ", (abrigos[i].nome),"|             " ,(abrigos[i].endereco),"|       ",(abrigos[i].telefone),"|      ",(abrigos[i].capacidade),"|     ",(abrigos[i].cidade) )  



})
}

// Menu principal e procurar abrigo
function menu() { 
   
                                               

    while  (true) {
        console.log('* Menu Principal *');
        console.log('01 - Cadastrar Abrigo');
        console.log('02 - Listar Abrigos');
        console.log('03 - Procurar Abrigo');
        console.log('04 - Sair');
        

        let opcao = readlineSync.question('Escolha uma opcao:');

        switch (opcao) {
            case '01':
                cadastrarAbrigo();
                break;
            case '02':
                listarAbrigos();
                break;
            case '03':
                procurarAbrigo();
                break;
            case '04':
                console.log('Saindo ....');
                return;
            default:
                console.log('Opcao invalida. Tente novamente.\n');
        }
    }
}
menu()