import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header/Header'
import DivContainer from './components/DivContainer/DivContainer';
import Dashboard from './components/Dashboard/Dashboard';

import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';





function App() {
  return (
  <>
     <Header/>

      <Routes>
       <Route path='/' element={<DivContainer/>} />;
       <Route path='/reviews' element={<Reviews/>} />;
       <Route path='/blogs' element={<Blogs/>} />;
       <Route path='/about' element={<About/>} />;
       <Route path='/dashboard' element={<Dashboard/>} />; 
     </Routes>
    </>
  );
}

export default App;
