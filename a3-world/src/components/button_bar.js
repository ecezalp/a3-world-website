import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'
import About from './about_me'
import Contact from './contact'
import Algorithms from './algorithms'
import Reviews from './reviews'



class ButtonBar extends React.Component {

    render (){
        return (
            <ButtonToolbar>
                <About />
                <Contact />
                <Algorithms />
                <Reviews />
            </ButtonToolbar> 
        )
    }
}

export default ButtonBar









//     render(){

//     return (
    

//         <Button bsStyle='primary' onClick={this.toggle}>
//           dismiss
//         </Button>
//       </div>
//     );
//   }

// }









// <div classname="middle-main-div">
          
//           </div>







    // const popoverHoverFocus = (
    // <Popover className="popover-child" id="popover-trigger-hover-focus" >
    //     <strong>Ece Özalp</strong> is a New York based web developer. She has completed Flatiron School's Web Development Immersive in 2016, Javascript and Ruby on Rails program. Ece loves programming. Her dream is to become a senior developer. She has experience with Ruby on Rails, Javascript, React.js, Redux, SQL, ActiveRecord, HTML5/CSS, jQuery, Git, Heroku.
    // </Popover>
    // );    

    // return(
    //     <ButtonToolbar className="button-toolbar" float="center">
    //         <OverlayTrigger className="popover-parent" trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
    //             <Button className="black-button" bsStyle="warning" bsSize="large" >
    //                 About
    //             </Button>
    //         </OverlayTrigger>
    //     <Button className="black-button" bsStyle="warning" bsSize="large" >
    //         Contact
    //     </Button>
    //     <Button className="black-button" bsStyle="warning" bsSize="large" >
    //         Algorithms
    //     </Button>
    //     <Button className="black-button" bsStyle="warning" bsSize="large" >
    //         Reviews
    //     </Button>
        
    //     </ButtonToolbar>
    // )


    // constructor (props) {
    //     super(props)
    //     this.state = { aboutIn: false };
    //     this.aboutHover = this.aboutHover.bind(this)
    // }

    // toggle(){
    //     return this.setState({ in: !this.state.aboutIn });
    // }

    // aboutHover (){
    //     return (
    //             <div className='transition-example'>
    //                 <p>Create your own declarative fade transition</p>
    //                     <Transition
    //                         in={this.state.aboutIn}
    //                         timeout={200}
    //                         className='fade'
    //                         enteredClassName='in'
    //                         enteringClassName='in'>
    //                         <div className='panel panel-default'>
    //                             <div className='panel-body'>
    //                                 Anim pariatur cliche reprehenderit, enim eiusmod high life
    //                                 accusamus terry richardson ad squid.
    //                                 Nihil anim keffiyeh helvetica, craft beer labore wes
    //                                 anderson cred nesciunt sapiente ea proident.
    //                             </div>
    //                         </div>
    //                     </Transition>
    //             </div>
    //     )
    // }
    // onMouseover={this.aboutHover()}