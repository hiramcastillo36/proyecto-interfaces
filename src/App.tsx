import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
      </div>
    </>
  )
}

export default App
