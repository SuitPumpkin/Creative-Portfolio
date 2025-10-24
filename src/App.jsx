import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Home from "./pages/Home";
import Modulo1 from "./pages/Modulo1";
import Modulo2 from "./pages/Modulo2";
import Modulo3 from "./pages/Modulo3";
import "./App.css";

function App() {
  return (
    <Router>
      <Background/>
      <Navbar />
      <main className="container">
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/modulo1" element={<Modulo1 />} />
        <Route path="/modulo2" element={<Modulo2 />} />
        <Route path="/modulo3" element={<Modulo3 />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
