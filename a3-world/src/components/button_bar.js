import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger } from 'react-bootstrap'

function ButtonBar () {

    
    const popoverHoverFocus = (
    <Popover className="popover-child" id="popover-trigger-hover-focus" >
        <strong>Ece Özalp</strong> is a New York based web developer. She has completed Flatiron School's Web Development Immersive in 2016, Javascript and Ruby on Rails program. Ece loves programming. She built this application using React.js.
    </Popover>
    );    

    return(
        <ButtonToolbar className="button-toolbar" float="center">
            <OverlayTrigger className="popover-parent" trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
                <Button className="black-button" bsStyle="warning" bsSize="large" >
                    About
                </Button>
            </OverlayTrigger>
        <Button className="black-button" bsStyle="warning" bsSize="large" >
            Contact
        </Button>
        <Button className="black-button" bsStyle="warning" bsSize="large" >
            Algorithms
        </Button>
        <Button className="black-button" bsStyle="warning" bsSize="large" >
            Reviews
        </Button>
        
        </ButtonToolbar>
    )
}

export default ButtonBar

// export default function () {
//     return(<nav class="navbar navbar-default">
//   <div class="container-fluid">
//     <!-- Brand and toggle get grouped for better mobile display -->
//     <div class="navbar-header">
//       <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//         <span class="sr-only">Toggle navigation</span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//         <span class="icon-bar"></span>
//       </button>
//       <a class="navbar-brand" href="#">Brand</a>
//     </div>

//     <!-- Collect the nav links, forms, and other content for toggling -->
//     <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//       <ul class="nav navbar-nav">
//         <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
//         <li><a href="#">Link</a></li>
//         <li class="dropdown">
//           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
//           <ul class="dropdown-menu">
//             <li><a href="#">Action</a></li>
//             <li><a href="#">Another action</a></li>
//             <li><a href="#">Something else here</a></li>
//             <li role="separator" class="divider"></li>
//             <li><a href="#">Separated link</a></li>
//             <li role="separator" class="divider"></li>
//             <li><a href="#">One more separated link</a></li>
//           </ul>
//         </li>
//       </ul>
//       <form class="navbar-form navbar-left">
//         <div class="form-group">
//           <input type="text" class="form-control" placeholder="Search">
//         </div>
//         <button type="submit" class="btn btn-default">Submit</button>
//       </form>
//       <ul class="nav navbar-nav navbar-right">
//         <li><a href="#">Link</a></li>
//         <li class="dropdown">
//           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
//           <ul class="dropdown-menu">
//             <li><a href="#">Action</a></li>
//             <li><a href="#">Another action</a></li>
//             <li><a href="#">Something else here</a></li>
//             <li role="separator" class="divider"></li>
//             <li><a href="#">Separated link</a></li>
//           </ul>
//         </li>
//       </ul>
//     </div><!-- /.navbar-collapse -->
//   </div><!-- /.container-fluid -->
// </nav>)
// }