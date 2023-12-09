import { useState } from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import TextForm from './Components/TextForm/TextForm'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app">
      <Navbar title="Text Utils" homeText="Home" aboutText="About"/>
      <div className="container">
      <TextForm heading="Enter The Text To Analyze:"/>
      </div>
    </div>
  )
}

export default App
