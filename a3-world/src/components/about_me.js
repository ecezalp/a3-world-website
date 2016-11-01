import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

function About () {
    
    const aboutText = "Ece Özalp is a New York based web developer. She has completed Flatiron School's Web Development Immersive in 2016. Ece loves programming. She has experience with Ruby on Rails, JavaScript, React.js, Redux, SQL, ActiveRecord, HTML/CSS, jQuery, Git, Heroku.                   She is familiar with Node.js, Express.js, MongoDB. She built this website using React. Ece has BA degrees from Duke University in Political Science and Literature, a minor in Italian, and an MFA degree from The New School in Creative Writing. Her native language is Turkish, she speaks fluent English and advanced Italian."

    return (
        <div>
                <br/>
            <h2> Ece Özalp</h2>
                <br/>
            <h3> Full Stack Web Developer</h3>
            <h4> Ruby on Rails, Javascript, React.js, Redux, ActiveRecord, </h4>
            <h4> jQuery, SQL, HTML / CSS, Heroku, Git, Node.js</h4> 
                 <br/> 
            <h3> Web Dev Immersive (Rails & Javascript) </h3>
            <h4> Flatiron School 2016 </h4>
                 <br/>
            <h3> MFA Creative Writing </h3>
            <h4> The New School 2016 </h4>
                 <br/>
            <h3> BA Literature && BA Political Science && Minor Italian </h3>
            <h4> Duke University 2012 </h4>
                <br/>
                <br/>
                <br/>
        </div>
    ) 
}

export default About



