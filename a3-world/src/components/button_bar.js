import React from 'react'
import { Button, DropdownButton, MenuItem, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'
import About from './about_me'
import Contact from './contact'
import Algorithms from './algorithms'
import Reviews from './reviews'
import Picture from './picture'
import Projects from './projects'


class ButtonBar extends React.Component {

        constructor (props) {
        super(props)
        this.state = {componentToBeRendered: null}
        this.toggleAbout = this.toggleAbout.bind(this)
        this.toggleContact = this.toggleContact.bind(this)
        // this.toggleAlgorithms = this.toggleAlgorithms.bind(this)
        this.toggleReviews = this.toggleReviews.bind(this)
        this.togglePicture = this.togglePicture.bind(this)
        this.toggleProjects = this.toggleProjects.bind(this)
    }

    toggleAbout () {
        this.setState({componentToBeRendered: <About />})
    }

    //  toggleAlgorithms (algNum) {
    //     this.setState({componentToBeRendered: <Algorithms />})
    //  <img src="../assets/algorithms/{this.props.algNum}" />
    // }

    toggleReviews () {
        this.setState({componentToBeRendered: <Reviews />})
    }

    toggleContact () {
        this.setState({componentToBeRendered: <Contact />})
    }

     togglePicture () {
        this.setState({componentToBeRendered: <Picture />})
    }

    toggleProjects () {
        this.setState({componentToBeRendered: <Projects />})
    }


    render (){
        return (
            <div>
            <ButtonToolbar>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggleAbout} >
                    About
                </Button>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggleContact} >
                    Contact
                </Button>

                <Button className="black-button" bsStyle="warning" bsSize="large" >
                    ALG
                </Button>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggleReviews} >
                    Reviews
                </Button>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.togglePicture} >
                    Pictures
                </Button>
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggleProjects} >
                    Projects
                </Button>
            </ButtonToolbar> 
            
                <div className="middle-main-div">
                    {this.state.componentToBeRendered}
                </div>
            </div>
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