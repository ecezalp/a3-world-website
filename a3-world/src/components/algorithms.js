import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Algorithms extends React.Component {

    currentAlg() {
        var currentAlgorithm = this.props.algorithms.find( (algorithm) => algorithm.id.toString() === this.props.params.id)
        return (currentAlgorithm)
    }

    capitalizedTitle() {
        return this.currentAlg().title.charAt(0).toUpperCase() + this.currentAlg().title.slice(1)
    }

    render() {
        return (
            <div>
                <br/>
                    <a href="https://projecteuler.net/"><h4> {this.capitalizedTitle()}</h4> </a>

                <h4> {this.currentAlg().description} </h4>
                    <br />
                <div className="algdiv">
                    <img src={this.currentAlg().image_links} />
                </div>
                <br/>
                <br />
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

