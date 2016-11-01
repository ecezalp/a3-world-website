import React from 'react'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import { Button, DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap'
// Popover, OverlayTrigger, Transition, Fade 

import {browserHistory} from 'react-router'


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

    buttonMapperReviews () {
        if (this.props.reviews[0]){
           return this.props.reviews.map( (review) => 
                (<MenuItem onClick={()=>this.goToRoute("reviews", review.id )}> {review.title} </MenuItem>)
            )
        }
    }

    buttonMapperProjects () {
        if (this.props.projects[0]){
           return this.props.projects.map( (project) => 
                (<MenuItem onClick={()=>this.goToRoute("projects", project.id )}> {project.title} </MenuItem>)
            )
        }
    }

     buttonMapperAlgorithms () {
        if (this.props.algorithms[0]){
           return this.props.algorithms.map( (algorithm) => 
                (<MenuItem onClick={()=>this.goToRoute("algorithms", algorithm.id )}> {algorithm.title} </MenuItem>)
            )
        }
    }







    render (){
        return (
            <div>

                <ButtonToolbar>

                    <Button className="black-button" bsSize="large" onClick={()=>this.goToRoute("about")} >
                        About
                    </Button>

                    <Button className="black-button" bsSize="large" onClick={()=>this.goToRoute("contact")} >
                        Contact
                    </Button>

                    <DropdownButton className="black-button" bsSize="large" key={1} title={"Algorithms"}>
                        {this.buttonMapperAlgorithms()}
                    </DropdownButton>
                    
                    <DropdownButton className="black-button" bsSize="large" key={2} title={"Reviews"}>
                        {this.buttonMapperReviews()}
                    </DropdownButton>
                
                    <DropdownButton className="black-button" bsSize="large" key={3} title={"Projects"}>
                        {this.buttonMapperProjects()}
                    </DropdownButton>

                    <Button className="black-button" bsSize="large" onClick={()=>this.goToRoute("pictures")} >
                        Pictures
                    </Button>

                </ButtonToolbar> 
                
              
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        algorithms: state.algorithms,
        reviews: state.reviews,
        projects: state.projects
    }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)

 export default componentCreator(ButtonBar)

