import React, { Component, Fragment } from 'react';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import '../styles/css/all.css'

import '../styles/contests.css'

import SponsoredAd from './layout-components/sponsored-ad'

import { buildUrl } from 'react-instafeed'
 
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

    // const Instagram = () => {
    //   console.log("ahhhhh")
    //   const { json, loading, error, abort } = useAbortableFetch(buildUrl(options))
    //   if (loading) return 'Loading...'
    //   if (error) return `Error: ${error}`
    //   if (!json) return null
     
    //   const { data, meta, pagination } = json
     
    //   return (
    //     <Fragment>
    //       {// eslint-disable-next-line no-unused-vars
    //       data &&
    //         data.map(({ caption, id, images, tags }, index) => {
    //           const image = images[options.resolution]
    //           return (
    //               <Image
    //                 key={index}
    //                 url={image.url}
    //                 title={caption.text}
    //                 caption={caption.text}
    //                 width={image.width}
    //                 height={image.height}
    //               />
    //             // </div>
    //           )
    //         })}
    //     </Fragment>
    //   )
    // }







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

        <div id="facebook-div" className="fb-page fb-column" data-href="https://www.facebook.com/AnaMariaPolo/" data-tabs="timeline" data-width="300" data-height="700" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/AnaMariaPolo/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AnaMariaPolo/">Ana Maria Polo</a></blockquote></div>

      
        <div className="hide-when-tiny">

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="anapolotv"
            options={{height: 700, width: 300}}
            />
        </div>


        {/* <div className="blahTastic">
          <h2>Hello</h2>
        {/*  {Instagram()} */}
        
        {/* </div> */} 
         


       


        </div>


       

       

        


      </div>
    );
  }
}

export default ConestPage;
