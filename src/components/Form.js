import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import "../styles/Footer.css"

class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { 
        name: "",
        email: "",
        feedback: ""
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        console.log("TARGET: ", target);
        console.log("NAME: ", name);
        console.log("VALUE: ", value);

        this.setState({[name]:value})
    }

    sendMessage = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: this.state.name + " (" + this.state.email + ")",
            to_name: "Olivia",
            feedback: this.state.feedback
        };

        emailjs.send("service_r24ify8", "portfoliocontactme", templateParams, "ChuYpA25XmKj00BiR").then(
            function(response){
                alert("Your message has successfully sent!");
                console.log("SUCCESS!", response.status, response.text);
            },
            function(err){
                alert("Your message was not able to be sent!");
                console.log("FAILURE!", err.log);
            }
        )

        this.setState({
            name:"",
            email:"",
            feedback:""
        });
    }

    render() { 
        return (
            <form className="footerForm" action={this.props.action} >
                <textarea id="name" name="name" onChange={this.handleInputChange.bind(this)} placeholder='Name' required value={this.state.name} rows={1}/>
                <textarea id="email" name="email" onChange={this.handleInputChange.bind(this)} placeholder='Email' required value={this.state.email} rows={1}/>
                <textarea id="feedback" name="feedback" onChange={this.handleInputChange.bind(this)} placeholder='Feedback' required value={this.state.feedback} rows={4}/>
                
                <input type="button" value="Send" onClick={this.sendMessage.bind(this)}/>
            </form>
        );
    }
}
 
export default Form;