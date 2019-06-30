import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";





// import LandingPage from "./components/landing-page";
import HomePage from "./components/home-page";
import ContestPage from "./components/contest-page";
import ContactUsPage from "./components/contact-us-page";
import PressPage from "./components/press-page";
import NavBar from './components/layout-components/navbar';
import Footer from './components/layout-components/footer'
import Header from './components/layout-components/header'


class App extends Component {
  render() {
    return (
      <div className="App">


    <Header/>
    <NavBar/>


        <Switch>
          {/* <Route exact path="/" component={LandingPage} /> */}
          {/* <Route exact path='/signup' render={() => <Signup  {...this.props} setTheUserInTheAppComponent={this.logMeIn}/>}/> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contest" component={ContestPage} /> 
          <Route exact path="/contact" component={ContactUsPage} />
          <Route exact path="/press" component={PressPage} />
        </Switch>

      <Footer/>

        
      </div>
    );
  }
}

export default App;
