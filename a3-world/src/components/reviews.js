import React from 'react'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import { Button } from 'react-bootstrap'

import { reviewArray } from '../constants/' 



class Reviews extends React.Component {

    constructor(){
        super()
        this.state = {desc: false, button: "Resource Description"}
        this.toggleDescription = this.toggleDescription.bind(this)
        this.currentReview = this.currentReview.bind(this)
    }



    currentReview() {
        var currentReview = this.props.reviews.find( (review) => review.id.toString() === this.props.params.id)
        return (currentReview)
    }

    toggleDescription () {
        if (!this.state.desc){
            this.setState({desc: this.currentReview().description, button: "Hide Description"})
        }
        else {
           this.setState({desc: false, button: "Resource Description"})
        }
    }

    returnReviewText () {
        debugger
        var currentReviewText = reviewArray.find( (review) => review.name.slice(-1) == this.currentReview().id )
        
        return currentReviewText()
    }


    render() {
        return (
            <div>
                <Button className="black-button" bsStyle="warning" bsSize="small" onClick={() => this.toggleDescription()}>
                        {this.state.button}
                </Button>

                <a href={this.currentReview().resource_link} target="_blank">
                 <Button className="black-button" bsStyle="warning" bsSize="small">
                        Resource Link
                </Button>
                </a>

                <div>
                    {this.state.desc}
                </div>

                <div>
                    {this.returnReviewText()}
                </div>

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

