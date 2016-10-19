import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

function About () {
    
    const aboutText = "Ece Özalp is a New York based web developer. She has completed Flatiron School's Web Development Immersive in 2016. Ece loves programming. She has experience with Ruby on Rails, JavaScript, React.js, Redux, SQL, ActiveRecord, HTML/CSS, jQuery, Git, Heroku.                   She is familiar with Node.js, Express.js, MongoDB. She built this website using React. Ece has BA degrees from Duke University in Political Science and Literature, a minor in Italian, and an MFA degree from The New School in Creative Writing. Her native language is Turkish, she speaks fluent English and advanced Italian."

    return  <h4>{aboutText}</h4>
}

export default About



