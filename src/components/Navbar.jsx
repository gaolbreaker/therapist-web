import React from "react";
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Navbar = ({ color }) => {

  const colorToggle = color === 'black' ? 'nav-btn-black' : 'nav-btn';
  // const colorToggle = 'nav-btn';

  return (
    <>
    <nav>
      <div className="nav-home">
        <div className={ colorToggle  }><Link to='/'>Shelly Kwong, LCSW</Link></div>
      </div>
      <div className="nav-btns">

        <div className={ colorToggle }><Link to='/About'>About</Link></div>
        <div className={ colorToggle }>Resources</div>
        <div className={ colorToggle }>Tools</div>
        <div className={ colorToggle }>Therapy</div>
        <div className={ colorToggle }>Rates</div>
        <div className={ colorToggle }>Contact</div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;