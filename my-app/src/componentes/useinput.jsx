import {useState} from 'react'

export function useInput() {
    const [Valor, setValor] = useState('')
    const onChange = (e) => {
        setValor(e.target.value)
    }
    return {
        Valor,
        onChange
    };
}
// aqui criamos um hook personalizado chamado useInput, que gerencia o estado de um valor de entrada (Valor) e fornece uma função onChange para atualizar esse valor com base no evento de mudança do input.