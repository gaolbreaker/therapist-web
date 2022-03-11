import React from "react";
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
    <nav>
      <div className="nav-home">
        <div className="nav-btn"><Link to='/'>Shelly Kwong, LCSW</Link></div>
      </div>
      <div className="nav-btns">

        <div className="nav-btn"><Link to='/About'>About</Link></div>
        <div className="nav-btn">Resources</div>
        <div className="nav-btn">Tools</div>
        <div className="nav-btn">Therapy</div>
        <div className="nav-btn">Rates</div>
        <div className="nav-btn">Contact</div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;