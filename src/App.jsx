import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'


function App() {
  return (

  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
