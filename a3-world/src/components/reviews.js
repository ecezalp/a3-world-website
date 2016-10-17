import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

class Reviews extends React.Component {

    constructor (props) {
        super(props)
        this.state = {aboutButton: false}
        this.toggle = this.toggle.bind(this)
        this.reviewsText = this.reviewsText.bind(this)
    }

    toggle () {
        this.setState.aboutButton = {aboutButton: !this.state.aboutButton}
    }

    reviewsText () {
        return "Hellooooo"
    }

    render() {
        return (
            <div>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggle} >
                    Reviews
                </Button>
            </div>
        )
    }  
}

export default Reviews
