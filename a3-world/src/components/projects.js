import React from 'react'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'



class Projects extends React.Component {

    constructor (props) {
        super(props)
        this.test = this.test.bind(this)
    }

    test() {
        var currentProject = this.props.projects.find( (project) => project.id.toString() === this.props.params.id)
        return (currentProject.description)
    }

    render() {
        return (
            <div>
                <h5> {this.test()} </h5>
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

