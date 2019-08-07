import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./arrows.css"

class FirstCarousel extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
       
         {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
    
      ]
    };

    const images = [
      {
        title: "one",
        id: "videoOne",
        src: "/images/thumb-spotify.png",
      },
      {
        title: "two",
        id: "videoTwo",
        src: "/images/thumb2.png",
      },
      {
        title: "three",
        id: "videoThree",
        src: "/images/thumb3.png",
      },
      {
        title: "four",
        id: "videoFour",
        src: "/images/thumb4.png",
      },
      {
        title: "five",
        id: "videoFive",
        src: "/images/thumb5.png",
      },
      {
        title: "six",
        id: "videoSix",
        src: "/images/thumb1.png"
      },
    ];

    let videoDivs = images.map(theImages => {
      return (
        <div className="carousel-iframe">
                <img
                  title={theImages.title}
                  id={theImages.id}
                  frameBorder="0"
                  className="video"
   
                  src={theImages.src}
                />
                </div>
      )
    })

    return (
      <div className="first-carousel-wrapper">
        <Slider {...settings}>
          {videoDivs}
        </Slider>
      </div>
    );
  }
}


export default FirstCarousel;
