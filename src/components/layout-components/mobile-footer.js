

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class MobileFooter extends Component {
  render() {
      return(

        <footer id="mobile-footer">



        
        <div className="column">
        <h6> Connect </h6>
        <div className="expand">

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
        </div>

        <div className="column">
        <h6> Shop </h6>
        <div className="expand">
        <a>Ordering & Payment</a>
        <a>Shipping</a>
        <a>Returns</a>
        <a>FAQ</a>
        </div>

        </div>

        <div className="column">
        <h6> Information </h6>
        <div className="expand">

        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
        <a>Ad Choices</a>
        <a>Contest Rules</a>
        <a>Contact Us</a>
        </div>
        </div>

       
      </footer>

        
      )
  }
}

export default MobileFooter;



