

import React, { Component } from 'react';

import '../../styles/homepage.css';
import '../../styles/css/all.css'
import MailchimpSubscribe from "../../components/mailchimp-subscribe/mailchimp-subscribe";




class JoinTheClub extends Component {

  render() {
    const url =
      "https://gmail.us20.list-manage.com/subscribe/post-json?u=500cf43f0dc12ed6d83d39375&amp;id=29e4bc9e01";
      return(


        <div id="join-the-club">

        <div id="join-club-wrapper">


        <h2>Join The Club!</h2>

        <p>Suscríbase para obtener acceso a sus últimos videos y noticias, y sea el primero en conocer concursos y regalos exclusivos.</p>


        <MailchimpSubscribe url={url} />

        </div>
      </div>
        
      )
  }
}

export default JoinTheClub;



