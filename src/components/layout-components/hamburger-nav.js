

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'

import { Link } from 'react-router-dom';



class HamburgerNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayBurger: true
    };
  }

  changeDisplay(){
    this.setState({displayBurger: !this.state.displayBurger})
 }


  render() {

    let burgerDisplay = this.state.displayBurger ? 'burgerDisplayNone' : 'burgerDisplay'

      return(
      
      <nav className="hamburger-nav" >

      <div className="burger-icon" onClick={this.changeDisplay.bind(this)}>
      
      <i className="fas fa-bars"></i>

      <span>MENU</span>

      </div>
      

        <div className={burgerDisplay}>

        <a href='/contest'> CONTESTS </a>
        <Link to="#">SHOP</Link>
        <Link to="/press">PRESS</Link>
        <Link to="/contact">CONTACT</Link>
        
        </div>
      </nav>
        
      )
  }
}

export default HamburgerNav;



