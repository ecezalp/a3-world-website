import React from 'react'
// import Communications from 'react-native-communications'
import { Button } from 'react-bootstrap'

class Contact extends React.Component {

    constructor (props) {
        super(props)
        this.sendEmail = this.sendEmail.bind(this)
        this.sendText = this.sendText.bind(this)
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
        
            <input type="text" className="submitter-name"/>

            <label> Your Message </label>

            <textarea rows="4" cols="10" name="comment" form="usrform">
            Enter Your Message here...</textarea>
            <br/>
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



