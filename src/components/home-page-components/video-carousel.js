import React, { Component } from "react";

import "../../styles/css/all.css";
import "../../styles/css/landing.css";
import "../../styles/homepage.css"

import SlickCarousel from '../new-carousel/slick-carousel';



class VidCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://www.youtube.com/embed/8c2zVZpHtn4?ecver=2&enablejsapi=1",
            "https://www.youtube.com/embed/UZJxDAcaiwA?ecver=2&enablejsapi=1",
            "https://www.youtube.com/embed/dr5SvcHe3Gk?ecver=2&enablejsapi=1",
            "https://www.youtube.com/embed/8d0fJpilYPk?ecver=2&enablejsapi=1",
            "https://www.youtube.com/embed/JZ36vXjK8Dc?ecver=2&enablejsapi=1"
          ],
          temp: "",
          slidingLeft: false,
          slidingRight: false,
        };
      }

      scroll(direction) {
        const tempArray = this.state.images.slice();
        let source = "";
        if (direction === "right") {

          // this.setState({slidingLeft: true})
          // setTimeout(()=>{
          //   this.setState({slidingLeft: false})
          // }, 1500)
        
          source = this.state.images[0];
          tempArray.shift();
          tempArray.push(source);
          this.setState({ temp: source, images: tempArray });
        } else {

          // this.setState({slidingRight: true})
          // setTimeout(()=>{
          //   this.setState({slidingRight: false})
          // }, 1500)

          source = this.state.images[this.state.images.length - 1];
          tempArray.pop();
          tempArray.unshift(source);
          this.setState({ temp: source, images: tempArray });
        }
      }


      render() {

        console.log(this.state)
       
        return (

           
          <div className="vid-carousel-parent-div">

            <div className="mailchimp wrapper">
              <div className="box">
              

                <SlickCarousel/>
    
              
    
              </div>
            </div>
       

          </div>
        );
      }
    



}


export default VidCarousel;