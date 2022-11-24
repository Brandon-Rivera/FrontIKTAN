import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/AboutIktan/About';
import Gallery from './pages/Gallery/Gallery';


function App() {
  return (
    <div className="App">
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<Header />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/" element={<About />} />
                        <Route path="/Gallery" element={<Gallery/>} />
                    </Routes>
                </Router>
            </>
    </div>
  );
}

export default App;
