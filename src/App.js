import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Home from "./pages/Home"
import RoverAnalysis from './pages/RoverAnalysis';

function App() {
  return (
    <div className="App">
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/RoverAnalysis" element={<RoverAnalysis />} />
                    </Routes>
                </Router>
            </>
    </div>
  );
}

export default App;
