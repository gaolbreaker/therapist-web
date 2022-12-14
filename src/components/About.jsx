import React from 'react';
import Navbar from './Navbar.jsx';
import bgImg from './../assets/bambooforest.png';
import therapistImg from './../assets/therapist.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, Router } from 'react-router-dom';

const aboutHeroStyle = {
  background: `rgb(241,233,221)`,
  // backgroundBlendMode: 'darken',
  // backgroundSize: 'cover',
  height: '100vh',
  // backgroundRepeat: 'no-repeat',
  color: 'black'
}

const About = () => {
  return (
    <>
      <div className="about-hero" style={aboutHeroStyle}>
        <Navbar color="black" />
        <div className="hero-blurb">
          <h2>
            This page will become the about <em>pagesadfsadf</em>.
          </h2>
          <p>
            Explore how meeting with a neurodivergent, as opposed to
            neurotypical, therapist can benefit you as a neurodivergent human.
          </p>
          <div className="round-btn">Get in touch</div>
        </div>
      </div>
      <footer>
        <nav className="footer-container">
          <div
            className="footer-left nav-btn"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Shelly Kwong, LCSW
          </div>
          <div className="footer-right nav-btn">&copy; 2022 Shelly Kwong</div>
        </nav>
      </footer>
    </>
  );
}

export default About;
