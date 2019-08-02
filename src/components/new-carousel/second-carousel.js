import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./arrows.css"


class SecondCarousel extends Component {
  render() {
    let settings = {
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
          breakpoint: 775,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: true
          }
        },
      ]
    };

    const images = [
      {
        title: "one",
        id: "imgOne",
        src: "/images/shop-img.png",
      },
      {
        title: "two",
        id: "imgTwo",
        src: "/images/shop-img.png"
      },
      {
        title: "three",
        id: "imgThree",
        src: "/images/shop-img.png"
      },
      {
        title: "four",
        id: "imgFour",
        src: "/images/shop-img.png"
      },
      {
        title: "five",
        id: "imgFive",
        src: "/images/shop-img.png"
      }
   
    ];

    let imageDivs = images.map(image => {
      return (
                <div>
                <img
                className="carousel-image"
                  title={image.title}
                  key={image.id}
                  alt=""
                  id={image.id}
                  src={image.src} />
                  </div>
      )
    })
    console.log('settings', settings)
    return (
        <Slider {...settings}>
          {imageDivs}
        </Slider>
    );
  }
}


export default SecondCarousel;
