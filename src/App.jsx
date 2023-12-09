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
    <div
      className="app"
      style={{
        background:
          Mode === "dark"
            ? "linear-gradient(180deg, black, rgb(10, 10, 29))"
            : "linear-gradient( 50deg, hsl(0deg 100% 90%) 0%,hsl(346deg 100% 89%) 2%, hsl(331deg 87% 88%) 6%, hsl(307deg 62% 86%) 16%,hsl(273deg 79% 87%) 30%, hsl(243deg 100% 89%) 50%, hsl(218deg 100% 84%)71%, hsl(204deg 100% 77%) 88%, hsl(197deg 100% 70%) 97%, hsl(191deg 95%60%) 100% )",
      }}
    >
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
//TO DO: add alerts from bootstrap

export default App
