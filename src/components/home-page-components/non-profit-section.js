

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class NonProfitSection extends Component {
  render() {
      return(


        <section id="non-prof-section">

        {this.props.language === 'english' && 
            <div className="non-prof-left-side" >
              <span>
                <h2>TOGETHER LET'S HELP OTHERS!</h2>
                <p>A life-long pet and animal lover, Ana Maria Polo sought a philanthropic organization that aligns with her beliefs. PETA Espanol, a nonprofit organization. Find out how Ana Maria Polo is doing her part to give back and join the support!</p>
                <button id="nonprofbtn">Donate Today</button>
              </span>
            </div> 
        }
        {this.props.language === 'spanish' && 
            <div className="non-prof-left-side" >
              <span>
                <h2> ¡Juntos ayudemos a otros!</h2>
                <p>Como amante de las mascotas y animales, Ana María Polo busco una organización filantrópica que se alinee con sus creencias- PETA Español una organización sin fines de lucro.  ¡Descubra cómo Ana María Polo está haciendo su parte y únanse al apoyo!</p>
                <button id="nonprofbtn">Donate Today</button>
              </span>
            </div>
        }

        <div id="nonprofimage"></div>

        {/* <img src="/images/nonprofit-section.png" id="nonprofimage" className="hide-when-small" /> */}

        </section>
        
      )
  }
}

export default NonProfitSection;



