import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

export default function Pictures () {
    const myPictureUrl = 'http://i.imgur.com/lqBzDD7.jpg' 
    const myPictureUrlTwo = "http://i.imgur.com/fZ33PwW.jpg"
    return ( 
        <div className="pic-div"> 
        <br/><br/><br/><br/>
            <div>
                <img src={myPictureUrl} height="300px" witdh="200px" />
            </div>
             <br/><br/><br/><br/> <br/><br/><br/><br/>
            <div>
                <img src={myPictureUrlTwo} height="300px" width="250px"/> 
            </div>
            <br/><br/><br/><br/>
        </div>
    )
}



