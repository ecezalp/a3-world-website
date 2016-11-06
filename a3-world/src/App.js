import React, {Component} from 'react';
import './App.css';
import ButtonBar from './components/button_bar'
import { Col } from 'react-bootstrap'
import CentralAnimation from './components/central_animation'
import {Fade} from 'react-bootstrap'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  
  constructor () {
    super()
    this.state = {lineOne: "", lineTwo: "", lineThree: ""}
    this.populatePoemLines = this.populatePoemLines.bind(this)
  }

  populatePoemLines() {
    setTimeout( function () {
      this.setState({lineOne: "my functions return"})
    }.bind(this), 1000)
    setTimeout( function () {
      this.setState({lineTwo: "true, commits merge conflict free"})
    }.bind(this), 2500)
    setTimeout( function () {
      this.setState({lineThree: "my terminal clear"})
    }.bind(this), 4000)
  }

  emptyHomeMessage () {
    if (!this.props.children) {
      return (
            <h5>
              <div className="line" key={1} >
                  {this.state.lineOne}
              </div>
              <div className="line" key={2}>
                  {this.state.lineTwo}
              </div>
              <div className="line" key={3}>
                  {this.state.lineThree}
              </div>
          </h5> 
      )
    }
  }
 
  render() {
    this.populatePoemLines()
    return (
      <div>
          <div className="top-central-div">
               <ButtonBar />
          </div>
           <div className="central-div">
          
          </div>
            <div className="middle-main-div"> 
              <div className="poem">
                {this.emptyHomeMessage()}
              </div>
                {this.props.children}
          
                
            </div>

      </div>
    )
  }
}

export default App;

      
//  <CentralAnimation />





