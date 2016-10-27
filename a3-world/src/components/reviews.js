import React from 'react'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'



class Reviews extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1> test 1 </h1>
            </div>
        )
    }  
}

function mapStateToProps(state, ownProps) {
    return {
        reviews: state.reviews
    }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)

 export default componentCreator(Reviews)

