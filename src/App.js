// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route
              path="/About"
              element={<About />}
            />
             <Route
              path="/"
              element={<Home />}
            />
             <Route
              path="/Portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/Resume"
              element={<Resume />}
            />
            <Route
              path="/Contact"
              element={<Contact />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;