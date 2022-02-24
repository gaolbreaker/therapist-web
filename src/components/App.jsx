import React from 'react';
import Navbar from './Navbar.jsx';
import bgImg from './../assets/bambooforest.png';

const heroStyle = {
  background: `rgba(0,0,0,.35) url(${bgImg})`,
  backgroundBlendMode: 'darken',
  backgroundSize: '100% auto',
  height: '100vh',
}

const App = () => {
  return (
    <>
      <div className="hero" style={heroStyle}>
        <Navbar />
      </div>
    </>
  );
}

export default App;