import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'

export default function Picture () {
    const myPictureUrl = 'http://i.imgur.com/lqBzDD7.jpg' 
    const myPictureUrlTwo = "http://i.imgur.com/fZ33PwW.jpg"
    return ( 
        <div> 
            <div>
                <img src={myPictureUrl} height="300px" witdh="200px" />
            </div>
            <div>
                <img src={myPictureUrlTwo} height="300px" width="250px"/> 
            </div>
        </div>
    )
}



