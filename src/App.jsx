import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Login from './pages/login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/d" element={<Login />} />
    </Routes>
  );
}

export default App;