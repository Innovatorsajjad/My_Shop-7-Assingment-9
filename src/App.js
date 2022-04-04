import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />

    </Routes>
  );
}

export default App;
