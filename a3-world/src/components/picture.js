import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

class Picture extends React.Component {

    constructor (props) {
        super(props)
        this.state = {aboutButton: false}
        this.toggle = this.toggle.bind(this)
        this.contactText = this.contactText.bind(this)
    }

    toggle () {
        this.setState.aboutButton = {aboutButton: !this.state.aboutButton}
    }

    contactText () {
        return "Hellooooo"
    }

    render() {
        return (
            <div>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggle} >
                    Picture
                </Button>
            </div>
        )
    }  
}

export default Picture



