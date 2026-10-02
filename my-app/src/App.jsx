import { CompartilharProvider } from './componentes/context/Context'
import { useInput } from './componentes/useinput'
import NomeDaTarefa from './componentes/form'
import Lista from './componentes/lista'

<CompartilharProvider>
    <NomeDaTarefa />
</CompartilharProvider>

function App() {


  

return (
    <CompartilharProvider>
      <div>
        <h1>Minha lista de tarefas</h1>
        <NomeDaTarefa />
        <Lista/>
      </div>
    </CompartilharProvider>
  )
}
export default App
