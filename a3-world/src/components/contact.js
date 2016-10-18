import React from 'react'
// import Communications from 'react-native-communications'
import { Button } from 'react-bootstrap'

class Contact extends React.Component {

    constructor (props) {
        super(props)
        this.state = {contactButton: false, text: null}
        this.toggle = this.toggle.bind(this)
        this.contactText = this.contactText.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
        this.sendText = this.sendText.bind(this)
    }

    toggle () {
        if (this.state.contactButton) {
            this.setState({text: this.contactText(), contactButton: !this.state.contactButton})
            
        }
        else {
            this.setState({text: null, contactButton: !this.state.contactButton})
        }    
    }

    sendEmail () {
        console.log("hit send email")
        // Communications.email(['ecezalp@gmail.com'], null, null, "hello from A3", "test") 
    }

     sendText () {
        console.log("hit send text")
        // Communications.email(['ecezalp@gmail.com'], null, null, "hello from A3", "test") 
    }

    contactText () {
        return (
            <form>
            <label> Your Name </label>
            <br />
            <input type="text" className="submitter-name"/>
            <br />
            <label> Your Message </label>
            <br />
            <textarea rows="4" cols="10" name="comment" form="usrform">
            Enter Your Message here...</textarea>
            <br/>
                <Button className="black-button" bsStyle="warning" bsSize="small" onClick={this.sendEmail} >
                    Send Email
                </Button>
                <br />
                <Button className="black-button" bsStyle="warning" bsSize="small" onClick={this.sendText} >
                    Send Text
                </Button>
            </form>
        )
    }

    render() {
        return (
            <div>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggle} >
                    Contact
                </Button>
                <div className="top-middle-left-div">
               {this.state.text} 
                </div>
            </div>
        )
    }  
}

export default Contact



