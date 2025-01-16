import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';


function App() {

  return (
   
        <Router>
            
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/apropos' element={<About/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>

        </Router>
  );
}

export default App
