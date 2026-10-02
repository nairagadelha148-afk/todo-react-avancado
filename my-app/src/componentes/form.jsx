import { useContext } from 'react'
import { useInput } from './useinput'
import canalCompartilhado from './context/Context'

function NomeDaTarefa() {
    const { Valor, onChange } = useInput('')
    const { tarefas, AdicionarTarefa, } = useContext(canalCompartilhado)

    return (
        <div>
            <input
                type="text"
                value={Valor}
                onChange={onChange}
            />

            <button onClick={() => AdicionarTarefa(Valor)}>
                Adicionar Tarefa
            </button>
        </div>
    )
}

export default NomeDaTarefa

// Este componente AdicionarTarefa utiliza o hook useState para gerenciar o estado do nome da tarefa. Ele renderiza um campo de entrada (input) que permite ao usuário digitar o nome da tarefa, e a função atualizarTarefa atualiza o estado com base no valor digitado pelo usuário.
// foi adicionado um botão "Adicionar Tarefa" que, ao ser clicado, limpa o campo de entrada definindo o estado nome como uma string vazia.