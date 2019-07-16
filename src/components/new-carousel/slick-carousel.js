import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./arrows.css"

class SlickCarousel extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    };

    const youtubeVideos = [
      {
        title: "one",
        id: "videoOne",
        src: "https://www.youtube.com/embed/8c2zVZpHtn4?ecver=2&enablejsapi=1",
      },
      {
        title: "two",
        id: "videoTwo",
        src: "https://www.youtube.com/embed/UZJxDAcaiwA?ecver=2&enablejsapi=1",
      },
      {
        title: "three",
        id: "videoThree",
        src: "https://www.youtube.com/embed/dr5SvcHe3Gk?ecver=2&enablejsapi=1",
      },
      {
        title: "four",
        id: "videoFour",
        src: "https://www.youtube.com/embed/8d0fJpilYPk?ecver=2&enablejsapi=1",
      },
      {
        title: "five",
        id: "videoFive",
        src: "https://www.youtube.com/embed/JZ36vXjK8Dc?ecver=2&enablejsapi=1",
      },
      {
        title: "six",
        id: "videoSix",
        src: "https://www.youtube.com/embed/o6QDFM_F3U4?ecver=2&enablejsapi=1",
      },
      {
        title: "seven",
        id: "videoSeven",
        src: "https://www.youtube.com/embed/jQvbF8WmC1Q?ecver=2&enablejsapi=1",
      },
      {
        title: "eight",
        id: "videoEight",
        src: "https://www.youtube.com/embed/ExaiLkmjs3w?ecver=2&enablejsapi=1",
      },
      {
        title: "nine",
        id: "videoNine",
        src: "https://www.youtube.com/embed/IOvo-fNYJ_E?ecver=2&enablejsapi=1",
      },
      {
        title: "ten",
        id: "videoTen",
        src: "https://www.youtube.com/embed/Wdgk7-GYtq8?ecver=2&enablejsapi=1",
      },
      {
        title: "eleven",
        id: "videoEleven",
        src: "https://www.youtube.com/embed/8d0fJpilYPk?ecver=2&enablejsapi=1"
      },
    ];

    let videoDivs = youtubeVideos.map(video => {
      return (
        <div className="carousel-iframe">
                <iframe
                  title={video.title}
                  id={video.id}
                  frameBorder="0"
                  className="video"
                  height="300"
                  width="300"
                  src={video.src}
                />
                </div>
      )
    })

    return (
      <div>
        <Slider {...settings}>
          {videoDivs}
        </Slider>
      </div>
    );
  }
}


export default SlickCarousel;
