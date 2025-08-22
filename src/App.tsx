import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import { Superpower } from './project';

function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superpower" element={<Superpower />} />
   
      </Routes>
    </Router>
    </>
  )
}

export default App
