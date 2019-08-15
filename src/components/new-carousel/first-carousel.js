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
        title: "six",
        id: "videoSix",
        src: "/images/thumb1.png",
        link: 'https://youtu.be/dr5SvcHe3Gk',
      },
      {
        title: "one",
        id: "videoOne",
        src: "/images/thumb-spotify.png",
        link: 'https://open.spotify.com/album/59XwLYUogq8eGRNQYc8OWu',
      },
      {
        title: "two",
        id: "videoTwo",
        src: "/images/thumb2.png",
        link: 'https://youtu.be/elphpwE3Z0o',
      },

      {
        title: "three",
        id: "videoThree",
        src: "/images/thumb3.png",
        link: 'https://youtu.be/UZJxDAcaiwA',
      },
      {
        title: "four",
        id: "videoFour",
        src: "/images/thumb4.png",
        link: 'https://youtu.be/1GDvpEiyX1c',
      },
      {
        title: "five",
        id: "videoFive",
        src: "/images/thumb5.png",
        link: 'https://youtu.be/HzHV13hpKJk',
      },
    ];

    let videoDivs = images.map(theImages => {
      return (
        <div className="carousel-iframe">
          <a href={theImages.link} target="_blank">
                <img
                  title={theImages.title}
                  id={theImages.id}
                  frameBorder="0"
                  className="video"
                  
                  src={theImages.src}
                  />
          </a>
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
