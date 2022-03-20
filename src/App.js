import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import CryptoUpdates from "./pages/CryptoUpdates"
import ResearchIt from "./pages/ResearchIt"
import Skidev from "./pages/Skidev"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/crypto-updates-india" element = {<CryptoUpdates/>}/>
        <Route path = "/research-it" element = {<ResearchIt/>}/>
        <Route path = "/skidev" element = {<Skidev/>}/>
      </Routes>
    </div>
  );
}

export default App
