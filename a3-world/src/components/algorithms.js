import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

class Algorithms extends React.Component {

    constructor (props) {
        super(props)
        this.state = {aboutButton: false}
        this.toggle = this.toggle.bind(this)
        this.algorithmsText = this.algorithmsText.bind(this)
    }

    toggle () {
        this.setState.aboutButton = {aboutButton: !this.state.aboutButton}
    }

    algorithmsText () {
        return "Hellooooo"
    }

    render() {
        return (
            <div>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggle} >
                    Algorithms
                </Button>
            </div>
        )
    }  
}

export default Algorithms



