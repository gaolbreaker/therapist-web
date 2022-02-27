import React from 'react';
import Navbar from './Navbar.jsx';
import bgImg from './../assets/bambooforest.png';

const heroStyle = {
  background: `rgba(0,0,0,.35) url(${bgImg})`,
  backgroundBlendMode: 'darken',
  backgroundSize: 'cover',
  height: '100vh',
  backgroundRepeat: 'no-repeat',
}

const App = () => {
  return (
    <>
      <div className="hero" style={heroStyle}>
        <Navbar />
        <div className="hero-blurb">
          <h2>Neurodivergent autistic female BIPOC Asian therapist <em>for you</em>.</h2>
          <p>Explore how meeting with a neurodivergent, as opposed to neurotypical, therapist can benefit you as a neurodivergent human.</p>
          <div className="round-btn">Get in touch</div>

        </div>
      </div>
    </>
  );
}

export default App;