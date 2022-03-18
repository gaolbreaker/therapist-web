import React from "react";
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Navbar = ({ color }) => {

  const colorToggle = color === 'black' ? 'nav-btn-black' : 'nav-btn';


  return (
    <>
    <nav>
      <div className="nav-home">
        <div className={ colorToggle  }><Link to='/'>Shelly Kwong, LCSW</Link></div>
      </div>
      <div className="nav-btns">

        <div className={ colorToggle }><Link to='/About'>About</Link></div>
        <div className={ colorToggle }><Link to='/Resources'>Resources</Link></div>
        <div className={ colorToggle }><Link to='/Tools'>Tools</Link></div>
        <div className={ colorToggle }><Link to='/Therapy'>Therapy</Link></div>
        <div className={ colorToggle }><Link to='/Rates'>Rates</Link></div>
        <div className={ colorToggle }><Link to='/Contact'>Contact</Link></div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;