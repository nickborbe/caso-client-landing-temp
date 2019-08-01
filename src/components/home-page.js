import React, { Component } from 'react';

import '../styles/homepage.css';
import '../styles/css/all.css'

import VideoSection from './home-page-components/video-section'
import SponsoredAd from './layout-components/sponsored-ad'

import ContestSection from './home-page-components/contest-section'
import Carousel from './home-page-components/carousel'
import SocialMediaSection from './home-page-components/social-media-section'
import NonProfitSection from './home-page-components/non-profit-section';

import GalleryPreview from './home-page-components/gallery-preview'
import JoinTheClub from './home-page-components/join-the-club'
import VidCarousel from './home-page-components/video-carousel';
import BlurbSection from './home-page-components/blurb-section';


class HomePage extends Component {
  render() {
    return (

      <div id="the-main">

       

        <div id="hp-main-image"></div>

        <BlurbSection language = {this.props.language} />

        <VidCarousel />

        {/* <VideoSection /> */}

        <SponsoredAd />

        <ContestSection language={this.props.language} />

        <Carousel />

        {/* <SocialMediaSection /> */}

        <NonProfitSection language={this.props.language} />


        {/* <GalleryPreview /> */}

        <JoinTheClub />

        <SponsoredAd />

      </div>
    );
  }
}

export default HomePage;
