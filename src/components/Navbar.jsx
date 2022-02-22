import React from "react";
import styled from 'styled-components';

const Navbar = () => {

  return (
    <>
    <nav>
      <div className="nav-home">
        <div className="nav-btn">Shelly Kwong</div>
      </div>
      <div className="nav-btns">
        <div className="nav-btn">Home</div>
        <div className="nav-btn">About</div>
        <div className="nav-btn">Info</div>
        <div className="nav-btn">Rates</div>
        <div className="nav-btn">Contact Us</div>
      </div>
    </nav>
  </>
  );
};

export default Navbar;