import { useState } from 'react'
import TambahData from './pages/TambahData'
import TabelData from './pages/Tabeldata'
import Sidnav from './compenen/Sidnav'
import EditData from './pages/Editdata'
import Dashboard from './compenen/Dashboard'
import Tambah from './compenen/Tambah'
import Profile from './compenen/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='flex'>
      <Sidnav/>
   <div className='flex-1 ml-62 p-6'>
   <Routes>
      <Route path="/" element={<TambahData/>}/>
      <Route path="/k" element={<TabelData/>}/>
      <Route path="/r" element={<EditData/>}/>
      <Route path="/d" element={<Dashboard/>}/>
      <Route path="/e" element={<Tambah/>}/>
      <Route path='/n' element={<Profile/>}/>
    </Routes>
   </div>
    </div>
  )
}

export default App