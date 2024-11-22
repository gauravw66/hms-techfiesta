import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Signup from './components/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login></Login>
    <Signup></Signup>
    </>
  )
}

export default App
