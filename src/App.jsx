import { Route, Routes } from "react-router-dom"
import Resiger from "./pages/register"
import LoginPage from "./pages/login"

const App = () => {
  return (
     <Routes>
        <Route path="/" element={<Resiger/>}/>
        <Route path="/login" element={<LoginPage/>}/>
     </Routes>
  )
}

export default App