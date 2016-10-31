import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

class Contact extends React.Component {

    constructor (props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
        this.sendText = this.sendText.bind(this)
        this.state = {name: "", message: "", thanks: false}
    }

    handleNameChange (event) {
        this.setState({name: event.target.value})
    }

    handleMessageChange (event) {
        this.setState({message: event.target.value})
    }

     sendText () {
       fetch("http://localhost:3000/text", {
            method: 'post',
            headers: {
            "Content-type": "application/json",
            "Accepts": "application/json"
            },
            body: JSON.stringify({name: this.state.name, message: this.state.message})
        })
    }

    sendEmail () {
       fetch("http://localhost:3000/email", {
            method: 'post',
            headers: {
            "Content-type": "application/json",
            "Accepts": "application/json"
            },
            body: JSON.stringify({name: this.state.name, message: this.state.message})
        })
    }

    thanksForText () {
        this.setState({thanks: "Thank you for the text!"})
    }

     thanksForEmail () {
        this.setState({thanks: "Thank you for the email!"})
    }

    textHandler () {
        if (!this.state.name || !this.state.message) {
            this.setState({thanks: "Please fill out both fields"})
        }
        else {
            this.sendText()
            this.thanksForText()
        }
    }

    emailHandler () {
        if (!this.state.name || !this.state.message) {
            this.setState({thanks: "Please fill out both fields"})
        }
        else {
            this.sendEmail()
            this.thanksForEmail()
        }   
    }

    contactText () {
        return (
            <form>
            <br/>
                <label> Your Name </label>
                    <br/>
                    <input type="text" className="submitter-name" onChange={this.handleNameChange}/>
                    <br/>
                    <br/>
                <label> Your Message </label>
                    <br/>
                    <textarea className="text-message-text" rows="5" cols="30" onChange={this.handleMessageChange}/> 
                    <br/>
                    <br/>
                    <br/>

                <div className="centerButtonTwo">
                    <ButtonToolbar>
                        <Button className="black-button" bsStyle="warning" bsSize="small"  onClick={ () => this.emailHandler() } >
                            Send Email
                        </Button>

                        <Button className="black-button" bsStyle="warning" bsSize="small"  onClick={ () => this.textHandler() } >
                            Send Text
                        </Button>
                    </ButtonToolbar>
                </div>

                <div>   
                    {this.state.thanks} 
                </div>
                <br/>
            </form>
        )
    }

    render() {
        return (
            this.contactText()
        )
    }  
}

export default Contact



