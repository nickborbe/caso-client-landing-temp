import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Header extends Component {
  render() {
      return(
        <header id="hp-header">

        <span className="hp-header-left-icons hide-when-teeny-tiny">
        <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/anapolotv?lang=en" target="_blank">  
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        </span>

        <span className="hp-header-left-icons mobile-only">

        <i className="fas fa-bars" 
        style={{fontSize: '28px'}}
        onClick={this.props.toggleMobileNav}
        ></i>

        </span>

        <a id="main-amp" href="/"> 
            <h1>
              ANA MARIA POLO
            </h1>
        </a>
          


          <span className="hp-header-right-icons">
          {/* <i className="fas fa-user"></i> */}

          <button className="translate-button" onClick = {this.props.changeLanguage}>
          {this.props.language ==='spanish' && 'ENGLISH' }
          {this.props.language ==='english' && 'ESPAÑOL' }
          
          </button>

          {/* <i className="fas fa-shopping-cart"></i> */}
          </span>
        </header>
      )
  }
}

export default Header;