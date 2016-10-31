import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

function About () {
    
    const aboutText = "Ece Özalp is a New York based web developer. She has completed Flatiron School's Web Development Immersive in 2016. Ece loves programming. She has experience with Ruby on Rails, JavaScript, React.js, Redux, SQL, ActiveRecord, HTML/CSS, jQuery, Git, Heroku.                   She is familiar with Node.js, Express.js, MongoDB. She built this website using React. Ece has BA degrees from Duke University in Political Science and Literature, a minor in Italian, and an MFA degree from The New School in Creative Writing. Her native language is Turkish, she speaks fluent English and advanced Italian."

    return (
        <div>
            <h3> Ece Özalp</h3>
            <h4> NYC  && Istanbul </h4>
            <h4> Full Stack Web Developer</h4>
             <div className="languages">
                <h5>
                    <ul>
                        <li> Ruby on Rails </li>
                        <li> React.js </li>
                        <li> ActiveRecord </li>
                        <li> jQuery </li>
                        <li> SQL </li>
                        <li> Javascript </li>
                        <li> Redux </li>
                        <li> HTML / CSS </li>
                        <li> Heroku </li>
                        <li> Git </li>
                    </ul>
                </h5>
            </div>
                <br/>
            <h4> 
                <div className="schools">
                    <ul> 
                        <li> Web Dev Immersive  ------------------ Flatiron School </li>
                        <li> MFA Creative Writing --------------- The New School </li>
                        <li> BA Literature && Political Science - Duke University</li>
                    </ul>
                </div>
            </h4>

           

        </div>
    ) 
}

export default About



