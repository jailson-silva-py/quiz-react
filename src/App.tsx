import './App.css'
import { Outlet } from 'react-router-dom'
import BarraNavegacao from './components/BarraNavegacao/BarraNavegacao'

function App() {
  

  return (
    <>
      <BarraNavegacao />
      <Outlet />
    </>
  )
}

export default App
