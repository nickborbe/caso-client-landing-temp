import React, { Component } from 'react';

import '../styles/css/all.css'

import '../styles/contests.css'

import SponsoredAd from './layout-components/sponsored-ad'


class ConestPage extends Component {
  render() {
    return (

      <div>

        <section id="contest-image-section">
        <img src="/images/nonprofit-section.png" id="contest-image" className="hide-when-tiny" />

        <div id="contest-right-side">
        <h2>Contest Information</h2>
        <p>Lorem ipsum dolor amet cred yr pour-over banjo sriracha, artisan church-key cronut bicycle rights. Fanny pack quinoa sustainable, affogato unicorn cred tacos 8-bit keytar paleo hexagon. Normcore wayfarers everyday kogi. Mlkshk pug artisan cliche XOXO, vexillologist gochujang quinoa shoreditch affogato cold-pressed four loko messenger bag try-hard. Distillery yr +1, meh retro you probably haven't heard of them jean shorts lumbersexual wolf austin vape cliche irony cardigan, butcher tbh adaptogen sustainable flannel.</p>
        <button>Register</button>
        </div>
        </section>

        <SponsoredAd/>

        <div className="bg-swerve">

          <section id="be-the-first-to-know-section">

          <h2>BE THE FIRST TO KNOW ABOUT GIVEAWAYS</h2>

          <p>A Short description about the contest or giveaway. This could decribe what to expect from the contest and hopefully leave the user wanting to learn more and register</p>

          <form>
            <input placeholder="Email Address"></input>
            <button>Subscribe</button>
          </form>

          </section>

          <section id="conversation-section">

        
            <h2>JOIN THE CONVERSATION</h2>
            <p>lorem ipsum sucre bayu losi rama weh anda re sep aluctum strea.  ave santum resitut lacerumtun ase les prolebre has ante tacitun romante lus don.90's artisan biodiesel meditation, shoreditch kinfolk beard keytar poutine fingerstache. Fingerstache humblebrag +1, aesthetic pinterest kogi celiac pop-up raclette asymmetrical shabby chic disrupt. Farm-to-table af try-hard, synth biodiesel vaporware church-key you probably haven't heard of them adaptogen lo-fi twee cold-pressed tilde occupy slow-carb. Blog woke iP</p>
        

            </section>

        </div>

        <div className="row">

        <div id="facebook-div" className="fb-page fb-column" data-href="https://www.facebook.com/AnaMariaPolo/" data-tabs="timeline" data-width="275" data-height="700" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/AnaMariaPolo/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AnaMariaPolo/">Ana Maria Polo</a></blockquote></div>

        {/* <div class="fb-column">
          <div class="fb-thumb"></div>
          <div class="fb-thumb"></div>
          <div class="fb-thumb"></div>
          <div class="fb-thumb"></div>
        </div> */}

        
        <div className="insta-column">
          <div className="insta-thumb"></div>
          <div className="insta-thumb"></div>
          <div className="insta-thumb"></div>
          <div className="insta-thumb"></div>
        </div>


        <div className="twitter-column">
          <div className="twitter-thumb"></div>
          <div className="twitter-thumb"></div>
          <div className="twitter-thumb"></div>
          <div className="twitter-thumb"></div>
        </div>


        </div>


       

       

        


      </div>
    );
  }
}

export default ConestPage;
