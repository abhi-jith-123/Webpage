import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexLayout from './components/IndexLayout'
import IndexPage from './pages/IndexPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<IndexLayout />}>
        <Route index element={<IndexPage />} />
       
      </Route>
    </Routes>
  )
}

  


  


export default App
