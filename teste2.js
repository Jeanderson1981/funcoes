man = {
    name: "Pedro",
    codname:["Pedrones", "Pedroca", "Pedrotauro"],

}
    Console.log ( 'Eu sou, man.name, mas pode me chamar de: man.codname' )

    const newMan = {
        ...man,
        newCodName :  ["Pepe", "Pe", "Pepipopoporopó"] ,            
        
    }
    Console.log ( 'Eu sou, man.name, mas pode me chamar de: newMan.newCodName' )