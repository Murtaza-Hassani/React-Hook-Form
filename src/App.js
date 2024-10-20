import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Dashboard from './Pages/Dashboard';
import Teams from './Pages/Teams';
import Contact from './Pages/Contact';


function Locations() {
  return (
    <Routes>
      <Route path='/Home' element={<Home />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Teams' element={<Teams />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Navbar location={<Locations />} />
    </Router>
  );
}

export default App;
