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
import HamburgerNav from "./components/layout-components/hamburger-nav";



class App extends Component {
  constructor(props){
    super(props)
      this.state = {language: 'english'}
    
  }

  switchLanguage = () =>{
    if(this.state.language === 'spanish'){
      this.setState({language: 'english'})
    } else {
      this.setState({language: 'spanish'})
    }
  }

  render() {
    return (
      <div className="App">


    <Header language = {this.state.language} changeLanguage = {this.switchLanguage}/>

    <NavBar/>

    <HamburgerNav/>


    <Switch>
      {/* <Route exact path="/" component={LandingPage} /> */}
      {/* <Route exact path='/signup' render={() => <Signup  {...this.props} setTheUserInTheAppComponent={this.logMeIn}/>}/> */}
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route exact path="/" render={()=> <HomePage language={this.state.language}/>} />
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
