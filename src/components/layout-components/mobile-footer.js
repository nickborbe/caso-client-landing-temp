

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'



class MobileFooter extends Component {
  constructor(props){
    super(props)
    this.state = {
      connectExpanded: false,
      shopExpanded: false,
      infoExpanded: false,
    }
  }


  toggleExpanded = (e, whichOne) =>{

    this.setState({[whichOne]: !this.state[whichOne]})

    e.target.innerHTML = e.target.innerHTML === '+'? 'x' : '+';

  }


  render() {
      return(

        <footer id="mobile-footer">



        
        <div className="footer-row ">
          <span>
        <h6> Connect</h6>
        <h5 onClick={e=>this.toggleExpanded(e, 'connectExpanded')}>+</h5>

          </span>
        <div className={this.state.connectExpanded? 'expanded' : 'expand'} >

        <div className="mob-foot-connect">
          <a href="https://www.facebook.com/AnaMariaPolo/" target="_blank" className="mobile-footer-social-link">
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
          </a>
          
        </div>
        <div className="mob-foot-connect">
        <a href="https://twitter.com/anapolotv?lang=en" target="_blank" className="mobile-footer-social-link">  
           <i className="fab fa-twitter"></i>
          <span>Twitter</span>
          </a>
          
        </div>

        <div className="mob-foot-connect">
          <a href="https://www.instagram.com/anapolotv/?hl=en" target="_blank" className="mobile-footer-social-link">  
        <i className="fab fa-instagram"></i>
          <span>Instagram</span>
          </a>

        </div>

        <div className="mob-foot-connect">
          <a href="https://www.youtube.com/user/DraPoloDigital" target="_blank" className="footer-social-link"> 
        <i className="fab fa-youtube"></i>
          <span>YouTube</span>
          </a>
        </div>
        
        </div>
        </div>

        <div className="footer-row">
          <span>
        <h6> Shop </h6>
        <h5 onClick={e=>this.toggleExpanded(e, 'shopExpanded')}>+</h5>
          </span>
        <div className={this.state.shopExpanded? 'expanded' : 'expand'}>
        <div className="mob-foot-shop">
          <a>Ordering & Payment</a>
          </div>
        <div className="mob-foot-shop">
          <a>Shipping</a>
          </div>
        <div className="mob-foot-shop">
          <a>Returns</a>
          </div>
        <div className="mob-foot-shop">
          <a>FAQ</a>
          </div>
        </div>

        </div>

        <div className="footer-row">
          <span>
        <h6> Information </h6>
        <h5 onClick={e=>this.toggleExpanded(e, 'infoExpanded')}>+</h5>
          </span>
        <div className={this.state.infoExpanded? 'expanded' : 'expand'}>

        <div className="mob-foot-info">
          <a>Privacy Policy</a>
          </div>
        <div className="mob-foot-info">
          <a>Terms & Conditions</a>
          </div>
        <div className="mob-foot-info">
          <a>Ad Choices</a>
          </div>
        <div className="mob-foot-info">
          <a>Contest Rules</a>
          </div>
        <div className="mob-foot-info">
          <a>Contact Us</a>
          </div>
        </div>
        </div>

       
      </footer>

        
      )
  }
}

export default MobileFooter;



