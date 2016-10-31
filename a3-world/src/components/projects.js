import React from 'react'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {ButtonBar, Button} from 'react-bootstrap'



class Projects extends React.Component {

    currentProject() {
        var currentProject = this.props.projects.find( (project) => project.id.toString() === this.props.params.id)
        return (currentProject)
    }

    spaceAdder() {
        return this.currentProject().description.split(". ")
    }

    render() {
        return (
            <div>
                <h3> {this.currentProject().title}</h3>
                    <br/>
                <h4> {this.currentProject().tagline} </h4>

                <div className="centerButton">
                    <a href={this.currentProject().github_link} target="_blank">
                        <Button className="black-button" bsStyle="warning" bsSize="small">
                                GitHub
                        </Button>
                    </a>
                </div>

          
                    <br/>
                    <br/>
                <h4> 
                    <ul>
                        {this.spaceAdder().map(function (element) {
                            return (
                                <div>
                            <li>{element}</li>
                                <br/>
                                </div>
                            
                            )
                        })}
                    </ul>
                </h4>
            </div>
        )
    }  
}

function mapStateToProps(state, ownProps) {
    return {
        projects: state.projects
    }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)

 export default componentCreator(Projects)

//   <a href={this.currentProject().resource_link} target="_blank">
//                         <Button className="black-button" bsStyle="warning" bsSize="small">
//                                 Heroku
//                         </Button>
//                     </a>

//                      <a href={this.currentProject().demo_link} target="_blank">
//                         <Button className="black-button" bsStyle="warning" bsSize="small">
//                                 API
//                         </Button>
//                     </a>

