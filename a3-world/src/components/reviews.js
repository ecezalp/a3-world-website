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
        this.returnReviewText = this.returnReviewText.bind(this)
    }

    returnReviewText () {
        var currentReviewText = reviewArray[this.props.params.id]
        return ( currentReviewText )
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

    render() {
        return (
            <div>
                <h3> {this.currentReview().title}</h3>
                    <br/>
                <div className="review-buttons-div">
                        <Button className="black-button" bsStyle="warning" bsSize="large" onClick={() => this.toggleDescription()}>
                                {this.state.button}
                        </Button>
                    <a href={this.currentReview().resource_link} target="_blank">
                        <Button className="black-button" bsStyle="warning" bsSize="large">
                                Resource Link
                        </Button>
                    </a>
                </div>
                    <br/>
                    <br/>
                <div className="review-description-div justify">
                    <h5>
                    {this.state.desc}
                    </h5>
                </div>
                    <br/>
                <div>
                    <h5>
                        <div className="justify">
                            {this.returnReviewText()}
                        </div>
                    </h5>
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

