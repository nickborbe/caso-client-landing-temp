

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class GalleryPreview extends Component {
  render() {
      return(


        <section id="hp-gallery-section">

        <h2>Picture Gallery Fill Space</h2>
  
        <div id="hp-gallery-container">

        <div className="col-1">

        <div id="row-1-col-1"></div>
        <div id="row-2-col-1"></div>
        
        </div>


        <div className="col-2">

        <div id="row-1-col-2"></div>


        <div id="row-2-col-2">
          <div id="row-2-col-2a"></div>
          <div id="row-2-col-2b"></div>
        </div>

        <div id="row-3-col-2">
          <div id="row-3-col-2a"></div>
          <div id="row-3-col-2b"></div>
        </div>
        
        </div>



        <div className="col-2 hide-when-small">

        <div id="top-row-right-side">
        <div className = "first-column"></div>

        <div className = "second-column">
            <div className="square"></div>
            <div className="square"></div>    
        </div>
        </div>

        <div id="bottom-row-right-side"></div>
        
        </div>


    
       
        




        </div>
        <button>View All</button>





        <div id="join-the-club">

          <div id="join-club-wrapper">


            <h2>Join The Club!</h2>

            <p className="hide-when-teeny-tiny">Lorem ipsum dolor amet cred yr pour-over banjo sriracha. Distillery yr +1, meh retro you probably haven't heard of them jean shorts lumbersexual wolf austin vape cliche irony cardigan, butcher tbh adaptogen sustainable flannel.</p>


            <form>
              <input placeholder="Email Address"></input>
              <button>Subscribe</button>
            </form>

            </div>
          </div>
  
        </section>
        
      )
  }
}

export default GalleryPreview;



