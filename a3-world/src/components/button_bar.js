import React from 'react'
import { Button, DropdownButton, MenuItem, ButtonToolbar, Popover, OverlayTrigger, Transition, Fade } from 'react-bootstrap'

import About from './about_me'
import Contact from './contact'
import Algorithms from './algorithms'
import Reviews from './reviews'
import Pictures from './pictures'
import Projects from './projects'

import {browserHistory} from 'react-router'


/*      issues to be solved: 
    1 - Unable to render specific component when onClick-ed on a DropDown MenuItem - Infinite Loop
        1a - Unable to pass the specific event key as a prop to the component to be rendered
        1b - Unable to setState to componentToBeRendered (because it is mid-rendering?) && same thing when setState is wrapped in a handleClick function
    2 - Post request to localhost:3000 (where the node.js backend lives) hits as {}. because of "mode: no-cors"? many variations with x-encoded (something like that) on Postman also failed. 
    3 - Animations are not rendered correctly (I thought my falsifyOpen would fix it, works only with first animation)
    4 - general styling .. 
    5 - fetching images correctly (something wrong with fetching from correct directory? )
        
*/

class ButtonBar extends React.Component {

    constructor () {
        super ()
        this.goToRoute = this.goToRoute.bind(this)
    }

    goToRoute (routeName, routeId) {
        if (routeId) {
            var address = "/" + routeName + "/" + routeId
            return (browserHistory.push(address))
        }
        else {
            return (browserHistory.push("/" + routeName))
        }
    }

    render (){
        return (
            <div>

                <ButtonToolbar>

                    <Button className="black-button" bsStyle="warning" bsSize="large" onClick={()=>this.goToRoute("about")} >
                        About
                    </Button>

                    <Button className="black-button" bsStyle="warning" bsSize="large" onClick={()=>this.goToRoute("contact")} >
                        Contact
                    </Button>

                    <DropdownButton className="black-button" bsStyle="warning" bsSize="large" key={1} title={"Algorithms"}>
                        <MenuItem onClick={()=>this.goToRoute("algorithms", "0")}> Project Euler Description </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("algorithms", "1")}> Euler 1 </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("algorithms", "2")}> Euler 2 </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("algorithms", "3")}> Euler 3 </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("algorithms", "4")}> Euler 4 </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("algorithms", "5")}> Euler 5 </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("algorithms", "6")}> Euler 6 </MenuItem>

                    </DropdownButton>
                    
                    <DropdownButton className="black-button" bsStyle="warning" bsSize="large" key={2} title={"Reviews"}>
                        <MenuItem onClick={()=>this.goToRoute("reviews", "1")}> POODR - Object Oriented Design </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("reviews", "2")}> POODR - Designing Classes with a Single Responsibility </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("reviews", "3")}> jQuery in Action - Bringing Pages to Life with jQuery </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("reviews", "4")}> React Docs - Animation </MenuItem>
                    </DropdownButton>
                
                    <DropdownButton className="black-button" bsStyle="warning" bsSize="large" key={3} title={"Projects"}>
                        <MenuItem onClick={()=>this.goToRoute("projects", "1")}> TwitchRuns </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("projects", "2")}> King of The Page </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("projects", "3")}> a3.world </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("projects", "4")}> Linques </MenuItem>
                        <MenuItem onClick={()=>this.goToRoute("projects", "5")}> Cat Fact! </MenuItem>
                    </DropdownButton>

                    <Button className="black-button" bsStyle="warning" bsSize="large" onClick={()=>this.goToRoute("pictures")} >
                        Pictures
                    </Button>

                </ButtonToolbar> 
                
              
            </div>
        )
    }
}

export default ButtonBar