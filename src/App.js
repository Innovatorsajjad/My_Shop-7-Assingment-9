import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import DivContaienr from './components/DivContainer/DivContainer';





function App() {
  return (
  <div>
     <Header/>
     
      <Routes>
        
       <Route path='/' element={<Home/>} />
       <Route path='/container' element={<DivContaienr/>} />


     </Routes>
    </div>
  );
}

export default App;
