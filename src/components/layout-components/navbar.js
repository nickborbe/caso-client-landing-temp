

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'

import { Link } from 'react-router-dom';



class NavBar extends Component {
  render() {
      return(

        <nav className="hp-navbar">
        <a href='/contest'> 
        {this.props.language ==='english' && 'CONTESTS'}
        {this.props.language ==='spanish' && 'CONCURSOS'}
        
         </a>
        
        <a href="https://ana-maria-polo.myshopify.com">
        {this.props.language ==='english' && 'SHOP'}
        {this.props.language ==='spanish' && 'COMPRA'}
          </a>

        <Link to="/press">
        {this.props.language ==='english' && 'PRESS'}
        {this.props.language ==='spanish' && 'ARTICULOS'}
          </Link>


        <Link to="/contact">
        {this.props.language ==='english' && 'CONTACT'}
        {this.props.language ==='spanish' && 'CONTACTO'}
          </Link>
      </nav>
        
      )
  }
}

export default NavBar;



