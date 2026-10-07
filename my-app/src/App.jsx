import { CompartilharProvider } from './componentes/context/Context'
import { useInput } from './componentes/useinput'
import NomeDaTarefa from './componentes/form'
import Lista from './componentes/lista'
import './App.css'


function App() {


  

return (
    <CompartilharProvider>
      <div className="App">
        <h1 className="titulo">Minha lista de tarefas</h1>
        <NomeDaTarefa />
        <Lista/>
      </div>
    </CompartilharProvider>
  )
}
export default App
