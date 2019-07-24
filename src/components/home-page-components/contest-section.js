

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class ContestSection extends Component {
  render() {
      return(

        <div id='contest-container'>

            <div className="contest-img" > </div>

          <section className = "contest-section">
            {this.props.language === 'english' && 
                <div id="contest-section-right-side">
                <h2>Sign up today for your chance to win an Ana Maria Polo contest! </h2>
                <p>To become a prominent figure in the Hispanic community cannot be achieved without having many dedicated and loyal fans. Ana Maria Polo is hosting contests to give back to her fans that have given her so much support and motivated her for so many years to continue doing what she loves most!  The lucky winners will be featured on her products, social media platforms, and will receive giveaways. Find out more about contest rules and deadlines.</p>
                <button>Register</button>
                </div>
            }

            {this.props.language === 'spanish' && 
                <div id="contest-section-right-side">
                <h2>¡Inscríbete hoy para obtener la oportunidad de ganar un concurso de Ana Maria Polo!</h2>
                <p>Para llegar a ser una figura prominente de la comunidad hispana es indispensable tener seguidores leales y dedicados. ¡Ana Maria Polo está organizando concursos para agradecerle a su fanaticada el apoyo brindado durante tantos años y por motivarla a hacer lo que tanto ama, ofrecer ayuda! Los afortunados ganadores serán incluidos en sus productos y plataformas de redes sociales, además de obtener obsequios. Obtenga más información sobre las reglas del concurso, aquí.</p>
                <button>Register</button>
                </div>
            }
          </section>

     






        
       </div>
      )
  }
}

export default ContestSection;



