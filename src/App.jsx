import { Routes, Route}from "react-rounter-dom"
import Tabeltailwind from '../pages/Tabeltailwind'

const App = () => {
  return (
     <Routes>
        <Route path="/" element={<Tabeltailwind/>}/>
     </Routes>
  )
}

export default App