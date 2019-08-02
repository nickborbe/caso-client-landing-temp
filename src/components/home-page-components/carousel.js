

import React, { Component } from 'react';
import SecondCarousel from '../new-carousel/second-carousel'

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Carousel extends Component {


  render() {
      return(

        <div className="carousel-back">

        <SecondCarousel />

        </div>
        
       
      )
  }
}

export default Carousel;



