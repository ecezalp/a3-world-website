import React, {Component} from 'react';
import './App.css';
import ButtonBar from './components/button_bar'
import { Col } from 'react-bootstrap'
import CentralAnimation from './components/central_animation'
import {Fade} from 'react-bootstrap'

class App extends Component {
  
  constructor () {
    super()
  }

  emptyHomeMessage () {
    if (!this.props.children) {
       return (
        <div className="empty">
        <br/>
        <br/>
        <br/>
          <h1>
              Welcome to my world.
          </h1>
          <br/>
          <h3>
            Please click a button to learn more about me!
          </h3>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div>
          <div className="top-central-div">
               <ButtonBar />
          </div>
           <div className="central-div">
          
          </div>

            <div className="middle-main-div">
                {this.emptyHomeMessage()}
                {this.props.children}
            </div>

      </div>
    )
  }
}

export default App;

      
//  <CentralAnimation />





