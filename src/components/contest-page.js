import React, { Component, Fragment } from 'react';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import '../styles/css/all.css'

import '../styles/contests.css'

import SponsoredAd from './layout-components/sponsored-ad'

import { buildUrl } from 'react-instafeed'
import InstagramFeed from './instagram-feed/instagram-feed';
 
// 🔥️ These are in your code (not this repo)
// import useAbortableFetch from '@hooks/useAbortableFetch'
// import Image from '@components/Image'




class ConestPage extends Component {
  render() {



    const options = {
      accessToken: '2b4be16e2a3249e8a75a76cbdecf5eb1',
      clientId: 'd03d9e5ca9554718b549a1315d6141da',
      get: 'user', // popular, user
      locationId: null,
      resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
      sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
      tagName: null,
      userId: 'anapolotv'
    }




    return (

      <div>

        <section id="contest-image-section">
        

        <div id="contest-left-side">
          <div className="contest-left-side-inner">
        <h2>Contest Information</h2>
        <p>Ana Maria Polo contests give back to her fans that have given her so much support and motivated her for so many years! Find out more about contest rules and deadlines.</p>
        <button>REGISTER</button>
          </div>
        </div>

        <img src="/images/nonprofit-section.png" id="contest-image" className="hide-when-tiny" />
        </section>

        <SponsoredAd/>

        <div className="bg-swerve">

          <section id="be-the-first-to-know-section">

          <h2>BE THE FIRST TO KNOW ABOUT GIVEAWAYS</h2>

          <p>A Short description about the contest or giveaway. This could decribe what to expect from the contest and hopefully leave the user wanting to learn more and register</p>

          <form>
            <input placeholder="Email Address"></input>
            <button>SUBSCRIBE</button>
          </form>

          </section>

          <section id="conversation-section">

            
        
            <h2>JOIN THE CONVERSATION</h2>
            <p>Become an Ana Maria Polo Insider. Subscribe to get access to her latest videos and news and be the first to know about exclusive contests and giveaways.</p>
        

            </section>

        </div>

        <div className="row">

          <div className="social-column">
        <div id="facebook-div" className="fb-page fb-column blah" data-href="https://www.facebook.com/AnaMariaPolo/" data-tabs="timeline" data-width="300" data-height="700" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/AnaMariaPolo/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AnaMariaPolo/">Ana Maria Polo</a></blockquote></div>
          </div>


       
        <div className="hide-when-tiny social-column">
         <InstagramFeed/>
         </div>


        <div className="hide-when-tiny social-column hide-when-small">

      
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="anapolotv"
            options={{height: 700, width: 300}}
            /> 
         </div>


   
         


       


        </div>


       

       

        


      </div>
    );
  }
}

export default ConestPage;
