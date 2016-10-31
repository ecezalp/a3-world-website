import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

class Contact extends React.Component {

    constructor (props) {
        super(props)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
        this.sendText = this.sendText.bind(this)
        this.state = {name: "", message: ""}
    }

    handleNameChange (event) {
        this.setState({name: event.target.value})
    }

    handleMessageChange (event) {
        this.setState({message: event.target.value})
    }

    sendEmail () {
        console.log("hit send email")
    }

     sendText () {
       fetch("http://localhost:3000/text", {
            method: 'post',
            mode: 'no-cors',
            headers: {
            "Content-type": "application/json",
            "Accepts": "application/json"
            },
            body: JSON.stringify({name: this.state.name, message: this.state.message})
        })
    }

    contactText () {
        return (
            <form>
            <br/>
                <label> Your Name </label>
                    <br/>
                    <input type="text" className="submitter-name" placeholder="Ece Özalp" onChange={this.handleNameChange}/>
                    <br/>
                    <br/>
                <label> Your Message </label>
                    <br/>
                    <textarea className="text-message-text" rows="5" cols="30" placeholder="Enter your message here" onChange={this.handleMessageChange}/> 
                    <br/>
                    <br/>
                    <br/>

                <div className="centerButtonTwo">
                    <ButtonToolbar>
                        <Button className="black-button" bsStyle="warning" bsSize="small" onClick={this.sendEmail} >
                            Send Email
                        </Button>

                        <Button className="black-button" bsStyle="warning" bsSize="small" onClick={this.sendText} >
                            Send Text
                        </Button>
                    </ButtonToolbar>
                </div>

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



