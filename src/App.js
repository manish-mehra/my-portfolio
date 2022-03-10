import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import CryptoUpdates from "./pages/CryptoUpdates"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/crypto-updates-india" element = {<CryptoUpdates/>}/>
      </Routes>
    </div>
  );
}

export default App
