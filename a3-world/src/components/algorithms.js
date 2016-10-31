import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Algorithms extends React.Component {

    currentAlg() {
        var currentAlgorithm = this.props.algorithms.find( (algorithm) => algorithm.id.toString() === this.props.params.id)
        return (currentAlgorithm)
    }

    render() {
        return (
            <div>
                <h4> {this.currentAlg().description} </h4>
                <div className="algdiv">
                <img src={this.currentAlg().image_links} />
                </div>
            </div>
        )
    }  
}

function mapStateToProps(state, ownProps) {
    return {
        algorithms: state.algorithms
    }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)

 export default componentCreator(Algorithms)

