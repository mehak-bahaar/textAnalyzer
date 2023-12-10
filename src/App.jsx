import { useState } from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import TextForm from './Components/TextForm/TextForm'
import About from './Components/About/About'
// import { createBrowserRouter as Router, RouterProvider, Route, Routes } from "react-router-dom";

function App() {
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
        {/* <TextForm heading="Enter The Text To Analyze:" Mode={Mode} /> */}
        {/* <Routes>
          <Route
            path="/"
            element={
              <TextForm heading="Enter The Text To Analyze:" Mode={Mode} />
            }
          />
          <Route path="/About/About" element={<About Mode={Mode} />} />
        </Routes> */}
            <TextForm heading="Enter The Text To Analyze:" Mode={Mode} />
      </div>
    </div>
  );
}
//TO DO: add alerts from bootstrap

//NOTE: had to remove react router because to navigate on my about page because i want to host it on github pages that doesn't support React Router using HTML-5 historyAPI that uses Browser history.
// i have mentioned my reason but has not deleted my code so that me code proves my competency and can be observed by other developers.

export default App
