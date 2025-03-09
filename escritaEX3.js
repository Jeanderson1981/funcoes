/*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console
    
    - 💡  Dica
        
        <aside>
        ⭐ Para remover um item de um array, você pode utilizar a função splice!
        Caso não se lembre como ela funciona, não tem nenhum problema: uma breve pesquisa no google te trará vários exemplos.
        
        </aside>*/

        let vazio = [ ]
        let listaDeTarefas  = vazio
       
        let tarefas1 = [ ]
        let tarefas2 = [ ]
        let tarefas3 = [ ]
        const usuarioEscreve = [tarefas1, tarefas2, tarefas3]
        const usuarioTarefas = readlineSync.question(tarefas1, tarefas2, tarefas3)

        
    

        console.log (usuarioTarefas)

