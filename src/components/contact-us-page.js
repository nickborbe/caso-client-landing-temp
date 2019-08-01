import React, { Component } from "react";
import axios from "axios"

import "../styles/contact.css";
import "../styles/css/all.css";

import Header from "./layout-components/header";
// import NavBar from "./layout-components/navbar";
import Footer from "./layout-components/footer";

// import SponsoredAd from "./layout-components/sponsored-ad";

class ContactUsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerShowing: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contactWhoEmail = document.getElementById('contactWhoEmail').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: process.env.BASE_URL + "/api/contact-us",
            data: {
                name: name,
                email: email,
                message: message,
                contactWhoEmail: contactWhoEmail
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                // alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                // alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        document.getElementById('contact-form').reset();
    }

    showAnswer(num) {
        this.setState({ answerShowing: num });
    }

    render() {
        return (
            <div className="contact-page-bg">

                <h1>CONTACT</h1>
                <div className="p-wrapper">
                    <p>
                    We can encourage users to use a particular hashtag if they register for the contest and to share it on social media.
                     Here we can show all of those comments in real time 
                     (if possible). We can also have comment boxes directly 
                     on the site but this would require a log in.
                    </p>
                </div>

                <div className="orange-form">
                    <form onSubmit={this.handleSubmit} id="contact-form">
                        <div className="fieldSet">
                            <label className="contact-field-label">CONTACT US- DROP DOWN TO SELECT SUBJECT</label>
                            <select id="contactWhoEmail">
                                <option value="fanMail">FAN MAIL</option>
                                <option value="LaDoctoraResponde">LA DOCTORA RESPONDE</option>
                                <option value="prMail">PR MAIL</option>
                                <option value="partnerships">BRAND PARTNERSHIPS</option>
                                <option value="help">CUSTOMER SERVICE/HELP</option>
                            </select>
                        </div>

                        <div className="fieldSet">
                            <label className="contact-field-label">NAME</label>
                            <input id="name" placeholder="John Doe" />
                        </div>

                        <div className="fieldSet">
                            <label className="contact-field-label">EMAIL</label>
                            <input type="email" id="email" placeholder="JohnDoe@email.com" />
                        </div>

                        <div className="fieldSet">
                            <label className="contact-field-label">MESSAGE</label>
                            <textarea rows="5" id="message" />
                        </div>

                        <button className="button-contact" type="submit">SEND</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactUsPage;
