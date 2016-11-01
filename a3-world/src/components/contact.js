import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

class Contact extends React.Component {

    constructor (props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
        this.sendText = this.sendText.bind(this)
        this.state = {name: "", message: "", numberPhone: "", thanks: "Please enter your name and a message"}
    }

    handleNameChange (event) {
        this.setState({name: event.target.value})
    }

    handleNumberPhoneChange (event) {
        this.SetState({numberPhone: event.target.value})
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
            body: JSON.stringify({name: this.state.name, message: this.state.message, numberPhone: this.state.numberPhone})
        })
    }

    sendEmail () {
       fetch("http://localhost:3000/email", {
            method: 'post',
            headers: {
            "Content-type": "application/json",
            "Accepts": "application/json"
            },
            body: JSON.stringify({name: this.state.name, message: this.state.message, numberPhone: this.state.numberPhone})
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
            this.setState({thanks: "Please fill out the name and the message fields"})
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
              <br/>
                <h4> Your Name </h4>
                    <textarea type="text" className="submitter-name" rows="1" cols="50" placeholder="Required" onChange={this.handleNameChange}/>
                    <br/>
                    <br/>
                <h4> Your Phone Number </h4>
                    <textarea type="text" className="submitter-name" rows="1" cols="50" placeholder="Optional" onChange={this.handleNumberPhoneChange}/>
                    <br/>
                    <br/>
                <h4> Your Message </h4>
                    <textarea className="text-message-text" rows="5" cols="50" placeholder="Required" onChange={this.handleMessageChange}/> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                <div className="centerButtonTwo">
                    <ButtonToolbar>
                        <Button className="black-button" bsStyle="warning" bsSize="large"  onClick={ () => this.emailHandler() } >
                            Send Email
                        </Button>

                        <Button className="black-button" bsStyle="warning" bsSize="large"  onClick={ () => this.textHandler() } >
                            Send Text
                        </Button>
                    </ButtonToolbar>
                </div>

                <div>   
                    <h4 style={{color:"rgba(0,0,0,0.7)", font:"1em"}}>
                    {this.state.thanks} 
                    </h4>
                </div>
                <br/>
                <br/>
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



