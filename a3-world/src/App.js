import React, {Component} from 'react';
import './App.css';
import ButtonBar from './components/button_bar'
import { Col } from 'react-bootstrap'
import CentralAnimation from './components/central_animation'

class App extends Component {
  render() {
    return (
      <div>
          <div className="top-central-div">
            <CentralAnimation />
          </div>
           <div className="central-div">
             <ButtonBar />
          </div>
      </div>
    )
  }
}

export default App;





