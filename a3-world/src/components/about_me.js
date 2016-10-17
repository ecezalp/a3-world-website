import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

class About extends React.Component {

    constructor (props) {
        super(props)
        this.state = {aboutButton: false}
        this.toggle = this.toggle.bind(this)
        this.aboutText = this.aboutText.bind(this)
    }

    toggle () {
        this.setState.aboutButton = {aboutButton: !this.state.aboutButton}
    }

    aboutText () {
        return "Hellooooo"
    }

    render() {
        return (
            <div>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggle} >
                    About
                </Button>
            </div>
        )
    }  
}

export default About



