/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista8
    */

    let food = [ 'carne', 'frango', 'porco', 'ovo', 'pão']
    console.log (food)
    console.log (`Essas são as minhas comidas preferidas: \n ${food.join('\n')}`)

    
    let usuarFood = [' ']
    console.log(food.replaceAll(usuarFood))
