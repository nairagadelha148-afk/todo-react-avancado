import { createContext } from 'react'
import { useState } from 'react'

const canalCompartilhado = createContext(null)

function CompartilharProvider({ children }) {
    const [tarefas, setTarefas] = useState([]) // passa a ser responsável por guardar a lista. O set tarefas é o que consegue alterar a lista

    function AdicionarTarefa(tarefa) {
        console.log('Tarefa recebida:', tarefa)
        const novaTarefa = {
            id: Date.now(),  // cada tarefa terá um id único.
            texto: tarefa,
            completo: false
        }

        setTarefas([...tarefas, novaTarefa])
    }

   function AtualizarTarefa(tarefaAtualizada) {
    setTarefas(
        tarefas.map(tarefa =>
            tarefa.id === tarefaAtualizada.id
                ? tarefaAtualizada
                : tarefa
        )
    )
}
// map() percorre todas as tarefas.
// Se encontrar a tarefa com o mesmo id, substitui pela versão atualizada.
//As outras tarefas permanecem iguais.

function DeletarTarefa(id) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !==id))
}

//filter() vai manter as outras tarefas
// "O ID dessa tarefa é diferente do ID que quero excluir
// E aqui não precisamos de event nem event.target, porque já temos o ID através de todo.id.
    return (
        <canalCompartilhado.Provider value={{ tarefas, AdicionarTarefa, AtualizarTarefa, DeletarTarefa }}>
            {children}
        </canalCompartilhado.Provider>
    )
    // o value é aquilo que o Context está compartilhando. 
    // o NomedaTarefa vai acessar o contexto compartilhado e ler as tarefas pelo Context.
    // tarefas → acesso à lista / adicionarTarefa → acesso à função que adiciona uma tarefa

}

//criando contexto para compartilhar dados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes. O createContext cria um contexto chamado canalCompartilhado, que pode ser usado para fornecer e consumir valores em diferentes partes da aplicação. O componente Provider envolve os filhos (children) e fornece o valor do contexto para eles.
// provider cria uma area para os componentes filhos acessar o contexto
export default canalCompartilhado
export { CompartilharProvider }