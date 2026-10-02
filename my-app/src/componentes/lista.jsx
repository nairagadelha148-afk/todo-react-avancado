import { useMemo, useState } from 'react'
import { memo, useContext } from 'react'
import canalCompartilhado from './context/Context'

export default function Lista() {
    const { tarefas } = useContext(canalCompartilhado)
    const [filtro, setFiltro] = useState('todos') // estado para armazenar o filtro selecionado
    const tarefasFiltradas = useMemo(() => {
        return tarefas.filter(todo => {
            if (filtro === 'completas') {
                return todo.completo
            }
            if (filtro === 'pendentes') {
                return !todo.completo // ! significa "não".
            }//useMemo é usado para memorizar o resultado da filtragem, evitando recalcular a lista filtrada em cada renderização, a menos que o filtro ou a lista de tarefas mude.
            return true // Retorna todas as tarefas se o filtro for "todos"
        })
    }, [filtro, tarefas]) // filter() cria uma nova lista contendo somente os elementos que passam pela condição.



    return ( // Renderiza a lista de tarefas com base no filtro selecionado. O filtro pode ser "todos", "completas" ou "pendentes". Dependendo do filtro, a lista de tarefas exibida será diferente. O estado filtro é atualizado quando o usuário clica nos botões correspondentes.
        <div>
            <div>
                <button onClick={() => setFiltro('todos')}>todos</button>
                <button onClick={() => setFiltro('completas')}>completas</button>
                <button onClick={() => setFiltro('pendentes')}>pendentes</button>
            </div>

            <ul>
                {tarefasFiltradas.map(todo => (
                    <li key={todo.id}>
                        <Tarefa todo={todo} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Tarefa = memo(function tarefa({ todo }) {
    const { AtualizarTarefa, DeletarTarefa } = useContext(canalCompartilhado)
    return (
        <label>
            <input
                type="checkbox"
                checked={todo.completo}
                onChange={e =>
                    AtualizarTarefa({
                        ...todo,
                        completo: e.target.checked   // Ela nos diz se o checkbox ficou: true ou false cria uma nova versão da tarefa, mantendo os dados que ela já tinha e alterando apenas completo.
                    })
                }
            />

            {todo.texto}
            <button onClick={() => DeletarTarefa(todo.id)}>
                Deletar
            </button>

        </label>
    )
})

// useMemo memoriza um RESULTADO
// React.memo memoriza um COMPONENTE
// Este componente Lista recebe uma lista de tarefas (todos) e funções para atualizar e deletar tarefas. 