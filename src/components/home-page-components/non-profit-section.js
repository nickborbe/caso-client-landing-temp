

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
                <h2> ¡Ana Maria Polo está apoyando a la organización Humane Society por todo el trabajo que hacen!</h2>
                <p>Ana Maria Polo ha sido una amante de las mascotas y animales durante toda su vida.  Ella vive con cinco perros los que la han motivado a buscar una organización filantrópica que se alinee con sus creencias. Humane Society es una organización estadounidense sin fines de lucro que lucha contra todas las formas de crueldad animal y enfrenta a fábricas de cachorros, granjas industriales, la práctica de cazar por trofeos, experimentos con animales y otras industrias crueles.  Su meta es lograr una sociedad más humana. Descubra lo que hace Ana Maria Polo para apoyarlos.</p>
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



