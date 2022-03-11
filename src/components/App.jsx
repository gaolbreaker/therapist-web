import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import bgImg from './../assets/bambooforest.png';
import therapistImg from './../assets/therapist.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home />}></Route>
          <Route path = "/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;