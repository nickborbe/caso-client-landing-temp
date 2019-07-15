

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

        <p className="hide-when-teeny-tiny">Lorem ipsum dolor amet cred yr pour-over banjo sriracha, artisan church-key cronut bicycle rights affogato cold-pressed four loko messenger bag try-hard. Distillery yr +1, meh retro you probably haven't heard of them jean shorts lumbersexual wolf austin vape cliche irony cardigan, butcher tbh adaptogen sustainable flannel.</p>


        <MailchimpSubscribe url={url} />

        </div>
      </div>
        
      )
  }
}

export default JoinTheClub;



