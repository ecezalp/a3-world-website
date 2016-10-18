import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

class Picture extends React.Component {

    constructor (props) {
        super(props)
        this.state = {picButton: false, pic: null}
        this.toggle = this.toggle.bind(this)
        this.pic = this.pic.bind(this)
    }

    toggle () {
        if (this.state.picButton) {
            this.setState({pic: this.pic(), picButton: !this.state.picButton})
        }
        else {
            this.setState({pic: null, picButton: !this.state.picButton})
        }    
    }

    pic () {
        return (<img src={'../assets/my_face'} width="100px" height="100px" />)
        // return (<img src='http://imgur.com/a/pXEYg' width="100px" height="100px" />)
    }

    render() {
        return (
            <div>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggle} >
                    Picture
                </Button>
                <div className="right-upper-div">
                    {this.state.pic}
                </div>
            </div>
        )
    }  
}

// {this.state.pic} 
export default Picture



