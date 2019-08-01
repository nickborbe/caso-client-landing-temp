import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Header extends Component {
  render() {
      return(
        <header id="hp-header">

        {/* <span className="hp-header-left-icons">
        <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/anapolotv?lang=en" target="_blank">  
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/user/DraPoloDigital" target="_blank">
        <i className="fab fa-youtube"></i>
        </a>
        </span> */}

        <span className="hp-header-left-icons">

        <i className="fas fa-bars" style={{fontSize: '28px'}}></i>

        </span>

        <a id="main-amp" href="/"> 
            <h1>
              ANA MARIA POLO
            </h1>
        </a>
          


          <span className="hp-header-right-icons">
          {/* <i className="fas fa-user"></i> */}

          <button onClick = {this.props.changeLanguage} style={{marginRight: '25%'}}>
          {this.props.language ==='spanish' && 'ENGLISH' }
          {this.props.language ==='english' && 'ESPAÑOl' }
          
          </button>

          <i className="fas fa-shopping-cart"></i>
          </span>
        </header>
      )
  }
}

export default Header;