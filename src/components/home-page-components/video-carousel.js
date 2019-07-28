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
                {/* <div id="outer-carousel">
                  <i
                    className="fas fa-arrow-left left"
                    onClick={() => {
                      this.scroll("left");
                    }}
                  />
                  <div id="carousel">
    
                    <iframe
                      title="two"
                      id="imageTwo"
                      frameBorder="0"
                      className={this.state.slidingRight? 'slideRight video2': 'video2'}
                      height="300"
                      width="300"
                      src={this.state.images[1]}
                    />
    
                    <iframe
                      title="three"
                      id="imageThree"
                      frameBorder="0"
                      className={this.state.slidingLeft? 'slideLeft video3 hide-when-small ' : 'video3 hide-when-small '}
                      height="300"
                      width="300"
                      src={this.state.images[2]}
                    />
                  </div>
                  <i
                    className="fas fa-arrow-right"
                    onClick={() => {
                      this.scroll("right");
                    }}
                  />

                </div> */}

                <SlickCarousel/>
    
              
    
                {/* <div className="ads-div">
                  <img src="images/300x200.jpg" alt="" className="ad-left"></img>
                  
                  <img src="images/300x200.jpg" alt="" className="ad-right"></img>
                </div> */}
              </div>
            </div>
            {/* <a href="https://www.youtube.com/user/DraPoloDigital" target="_blank">
                <button id="see-all-vids-btn">See All</button>
            </a> */}

          </div>
        );
      }
    



}


export default VidCarousel;