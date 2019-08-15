

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'

import { Link } from 'react-router-dom';



class HamburgerNav extends Component {
 
  render() {


      return(
      
      <nav className="hamburger-nav" >

        <div className="x">
          <b onClick={this.props.toggleMobileNav}>X</b>
        </div>

        {/* <div className=''> */}
        <Link to="/">HOME</Link>
        <a href='/contest'> CONTESTS </a>
        <Link to="https://ana-maria-polo.myshopify.com">SHOP</Link>
        <Link to="/press">PRESS</Link>
        <Link to="/contact">CONTACT</Link>
        
        {/* </div> */}
      </nav>
        
      )
  }
}

export default HamburgerNav;



