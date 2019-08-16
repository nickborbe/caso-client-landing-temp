import React, { Component, Fragment } from "react";
// import axios from "axios";
// import { buildUrl } from "react-instafeed";
import instafeed from "instafeed.js";
import './instagram-feed.css'
import '../../styles/css/all.css'


// const options = {
//   accessToken: '215070062.d03d9e5.be7e8b4f5c304a599cf14423e25c4d28',
//   clientId: 'd03d9e5ca9554718b549a1315d6141da',
//   get: 'user', // popular, user
//   locationId: null,
//   resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
//   sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
//   tagName: null,
//   userId: 'anapolotv'
// }
// function getInstagramData() {
//   const userid = "215070062";
//   const secret = "215070062.d03d9e5.be7e8b4f5c304a599cf14423e25c4d28";
//   const limit = "6";
//   // This URL is applied to user feed, if you want to change this with whatever you want here is the place to visit https://www.instagram.com/developer/endpoints/
//   const url =
//     "https://api.instagram.com/v1/users/" +
//     userid +
//     "/media/recent/?access_token=" +
//     secret +
//     "&count=" +
//     limit +
//     "&callback=?";
//   return axios.get(url).then(response => response.data);
// }

// return axios.get(url).then(response => response.data);

class InstagramFeed extends Component {
  render() {
    let userFeed = new instafeed({
      get: "user",
      userId: 215070062,
      accessToken: "215070062.d03d9e5.be7e8b4f5c304a599cf14423e25c4d28",
      resolution: "standard_resolution",
      useHttp: "true",
      limit: 6,
      target: 'Instagram-feed',
      template:
        `
        <div class="Instagram-card">
        <div class="Instagram-card-image">
        <a href="{{link}}"><img src="{{image}}" /></a>
      </div>
      <div class="Instagram-card-content truncate-overflow">
      <p title="{{caption}}"><a href="{{link}}" class="Instagram-card-content-user"><span class="username">{{model.user.username}}:</span>
       {{caption}}</a> </p>
      </div>
      <div class="Instagram-card-content>
      <p class="likes-comments"> <a href="{{link}}"><i class="fas fa-heart"></i> {{likes}} <i class="fas fa-comment"></i> {{comments}}</a></p>
      </div>
      <hr>
      </div>`,
      sortBy: "most-recent",
      links: false
    });
    userFeed.run();

    return (
    <>
    {/* <h4>ANAPOLOTV <span><i className="fab fa-instagram"/></span></h4> */}
    <div id="Instagram-feed" className="Instagram-feed" />
    </>);
  }
}

export default InstagramFeed;
