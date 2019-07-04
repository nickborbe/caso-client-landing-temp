

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'

import { Link } from 'react-router-dom';



class NavBar extends Component {
  render() {
      return(

        <nav className="hp-navbar">
        <Link to='/contest'> CONTESTS </Link>
        
        <Link to="#">SHOP</Link>
        <Link to="/press">PRESS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
        
      )
  }
}

export default NavBar;



