import { useState } from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import TextForm from './Components/TextForm/TextForm'

function App() {
  const [count, setCount] = useState(0)
  const [Mode, setMode] = useState("dark");
  const ModeHandler = ()=>{
    if(Mode === "dark"){
      setMode("light")
    }else{
      setMode("dark")
    }
  }
  return (
    <div className="app" style={{background:Mode === "dark" ? "linear-gradient(180deg, black, rgb(10, 10, 29))" : "white"}}>
      <Navbar
        title="Text Utils"
        homeText="Home"
        aboutText="About"
        Mode={Mode}
        ModeHandler={ModeHandler}
      />
      <div className="container">
        <TextForm heading="Enter The Text To Analyze:" Mode={Mode} />
      </div>
    </div>
  );
}

export default App
