import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import About from './components/About';
import GameDetail from './components/GameDetail';


function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About /> } />
          <Route path="/game" element={<GameDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
