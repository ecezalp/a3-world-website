import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

class About extends React.Component {

    constructor (props) {
        super(props)
        this.state = {aboutButton: false, text: null}
        this.toggle = this.toggle.bind(this)
        this.aboutText = this.aboutText.bind(this)
    }

    toggle () {
        if (this.state.aboutButton) {
            this.setState({text: this.aboutText(), aboutButton: !this.state.aboutButton})
        }
        else {
            this.setState({text: null, aboutButton: !this.state.aboutButton})
        }    
    }

    aboutText () {
        return ("Ece Özalp is a New York based web developer. She has completed Flatiron School's Web Development Immersive in 2016. Ece loves programming. She has experience with Ruby on Rails, JavaScript, React.js, Redux, SQL, ActiveRecord, HTML/CSS, jQuery, Git, Heroku.                   She is familiar with Node.js, Express.js, MongoDB. She built this website using React. Ece has BA degrees from Duke University in Political Science and Literature, a minor in Italian, and an MFA degree from The New School in Creative Writing. Her native language is Turkish, she speaks fluent English and advanced Italian.")
    }

    render() {
        return (
            <div>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggle} >
                    About
                </Button>
                <div className="middle-main-div">
               {this.state.text} 
                </div>
            </div>
        )
    }  
}

export default About



