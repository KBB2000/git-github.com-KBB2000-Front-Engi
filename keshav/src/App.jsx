import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Mail from './pages/Mial';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/login' element={<Login/>} />
        <Route path = '/' element={<Mail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App