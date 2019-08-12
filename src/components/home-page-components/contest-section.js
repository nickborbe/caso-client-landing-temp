

import React, { Component } from 'react';
import SponsoredAd from '../layout-components/sponsored-ad';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class ContestSection extends Component {
  render() {
      return(
        <div className="master-contest-div">

          <img className="hp-swirl1" src="/images/hp-swirl-1.png" />
         

          


          <SponsoredAd />


        <div id='contest-container'>


            <div className="contest-img">
            {/* <div> */}
              <img  src="/images/boy-and-dog.png" />

              


              
               </div>

          <section className = "contest-section">
            {this.props.language === 'english' && 
                <div id="contest-section-right-side">
                  <div className="contest-right-inner">
                <h2>SIGN UP TO MY LATEST CONTEST! </h2>
                <p>Ana Maria Polo contests give back to her fans that have given her so much support and motivated her for so many years! Find out more about contest rules and deadlines.</p>
                <button>ENTER CONTEST</button>
                  </div>
                </div>
            }

            {this.props.language === 'spanish' && 
                <div id="contest-section-right-side">
                  <div className="contest-right-inner">
                <h2>¡Inscríbete hoy para obtener la oportunidad de ganar un concurso de Ana Maria Polo!</h2>
                <p>Para llegar a ser una figura prominente de la comunidad hispana es indispensable tener seguidores leales y dedicados. ¡Ana Maria Polo está organizando concursos para agradecerle a su fanaticada el apoyo brindado durante tantos años y por motivarla a hacer lo que tanto ama, ofrecer ayuda! Los afortunados ganadores serán incluidos en sus productos y plataformas de redes sociales, además de obtener obsequios. Obtenga más información sobre las reglas del concurso, aquí.</p>
                <button>ENTER CONTEST</button>
                  </div>
                </div>
            }
          </section>



            

     






        
       </div>

            <SponsoredAd />

            <img className="hp-swirl2" src="/images/hp-swirl-2.png" />
            </div>
     
      )
  }
}

export default ContestSection;



