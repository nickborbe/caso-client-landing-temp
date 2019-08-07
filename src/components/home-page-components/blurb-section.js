

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class BlurbSection extends Component {
  render() {
      return(

        <div>


          <section className="blurb-section">
            {this.props.language === 'english' && 
               
                  
            <div className='blurb-inner'>

           
                
                <p>
                    Ana Maria Polo invites you to stay connected beyond the television screen.
                    You will gain insight into her philanthropy work, lifestyle, and everyday passions. 
                    Discover how she has dedicated her life's work helping different communities.
                    Connect with Ana Maria Polo outisde of the courtroom.  He Dicho!!
                </p>

                <div className="mobile-only">
                <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank">
                <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/anapolotv?lang=en" target="_blank">  
                <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank">
                <i className="fab fa-instagram"></i>
                </a>
                </div> 

               <div className="mid-page-hr" ></div>

            </div>
                
              
            }

            {this.props.language === 'spanish' && 
             
  
             <div className='blurb-inner'>

           
                
             <p>
                 Ana Maria Polo invites you to stay connected beyond the television screen.
                 You will gain insight into her philanthropy work, lifestyle, and everyday passions. 
                 Discover how she has dedicated her life's work helping different communities.
                 Connect with Ana Maria Polo outisde of the courtroom.  He Dicho!!
             </p>

             <div className="mobile-only">
             <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank">
             <i className="fab fa-facebook-f"></i>
             </a>
             <a href="https://twitter.com/anapolotv?lang=en" target="_blank">  
             <i className="fab fa-twitter"></i>
             </a>
             <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank">
             <i className="fab fa-instagram"></i>
             </a>
             </div> 

            <div className="mid-page-hr" ></div>

         </div>
                
                  
            
            }
          </section>

     






        
       </div>
      )
  }
}

export default BlurbSection;



