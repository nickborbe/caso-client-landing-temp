import React, { Component } from "react";

import "../../styles/css/all.css";
import "../../styles/css/landing.css";
import "../../styles/homepage.css"

import SlickCarousel from '../new-carousel/slick-carousel';
import FirstCarousel from '../new-carousel/first-carousel'



class VidCarousel extends Component {

      render() {

        console.log(this.state)
       
        return (

           
          <div className="vid-carousel-parent-div">

            <div className="">
              <div className="box-1">
                
              

                <FirstCarousel />
    
              
    
              </div>
            </div>
       

          </div>
        );
      }
    



}


export default VidCarousel;