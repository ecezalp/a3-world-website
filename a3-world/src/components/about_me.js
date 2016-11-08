import React from 'react'
import { Button } from 'react-bootstrap'

function About () {

    return (
        <div className="first">
                <br/>
            <h2> Ece Özalp</h2>
                <div className="about-info">
                    <div className="about-info-one">
                        <a href="http://www.github.com/ecezalp" target="_blank">
                            <Button className="black-button" bsStyle="warning" bsSize="medium">
                                    GitHub
                            </Button>
                        </a>
                    </div>
                    <div className="about-info-two">
                        <a href="https://www.linkedin.com/in/ece-ozalp-46b18940" target="_blank">
                            <Button className="black-button" bsStyle="warning" bsSize="medium">
                                    LinkedIn
                            </Button>
                        </a>
                    </div>
                </div>
                    <br/>
            <h3 style={{"margin-top":"50px"}}> Full Stack Web Developer</h3>
            <h4> Ruby on Rails, Javascript, React.js, Redux, ActiveRecord, </h4>
            <h4> jQuery, SQL, HTML / CSS, Heroku, Git, Node.js</h4> 
           
            <h3 style={{"margin-top":"40px"}}> Web Dev Immersive (Rails & Javascript) </h3>
            <h4> Flatiron School 2016 </h4>
    
            <h3 style={{"margin-top":"40px"}}> MFA Creative Writing </h3>
            <h4> The New School 2016 </h4>
        
            <h3 style={{"margin-top":"40px"}}> BA Literature & BA Political Science & Minor Italian </h3>
            <h4> Duke University 2012 </h4>
                <br/>
                <br/>
        </div>
    ) 
}

export default About



