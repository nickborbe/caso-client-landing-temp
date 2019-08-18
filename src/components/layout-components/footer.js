

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class Footer extends Component {
  render() {
      return(

        <footer id="the-footer">

        <div id="footer-img-contain">

          <h4> ANA MARIA POLO</h4>
          
        </div>


        <section>
        
        <div className="column">
        <h5> Connect </h5>
        <div>
          <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank" className="footer-social-link">
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
          </a>
          
        </div>
        <div>
        <a href="https://twitter.com/anapolotv?lang=en" target="_blank" className="footer-social-link">  
           <i className="fab fa-twitter"></i>
          <span>Twitter</span>
          </a>
        </div>

        <div>

          <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank" className="footer-social-link">  
        <i className="fab fa-instagram"></i>
          <span>Instagram</span>
          </a>

        </div>

        <div>
          <a href="https://www.youtube.com/user/DraPoloDigital" target="_blank" className="footer-social-link"> 
        <i className="fab fa-youtube"></i>
          <span>YouTube</span>
          </a>
        </div>
        
        </div>

        <div className="column hide-when-tiny">
        <h5> Shop </h5>
        <a>Ordering & Payment</a>
        <a>Shipping</a>
        <a>Returns</a>
        <a>FAQ</a>

        </div>

        <div className="column hide-when-small">
        <h5> Information </h5>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
        <a>Ad Choices</a>
        <a>Contest Rules</a>
        <a>Contact Us</a>
        </div>

        </section>

        <form className="hide-when-teeny-tiny">
          <h6> Subscribe To Our Newsletter</h6>

          <div className="footer-input-button-wrapper">
          <input placeholder="email address"/>
          <button>OK</button>
          </div>

        </form>
       
      </footer>

        
      )
  }
}

export default Footer;



