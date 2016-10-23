import React from 'react'
import { Button } from 'react-bootstrap'

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
        debugger
        // console.log("hit send text")
        // 
    }

    contactText () {
        return (
            <form>
                <label> Your Name </label>
                    <input type="text" className="submitter-name" placeholder="Ece Özalp" onChange={this.handleNameChange}/>
                <label> Your Message </label>
                    <textarea className="text-message-text" rows="4" cols="15" placeholder="Enter your message here" onChange={this.handleMessageChange}/> 
                <Button className="black-button" bsStyle="warning" bsSize="small" onClick={this.sendEmail} >
                    Send Email
                </Button>
                <Button className="black-button" bsStyle="warning" bsSize="small" onClick={this.sendText} >
                    Send Text
                </Button>
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



