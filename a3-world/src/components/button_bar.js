import React from 'react'
import { Button, ButtonToolbar, Popover, OverlayTrigger, Transition } from 'react-bootstrap'
import About from './about_me'
import Contact from './contact'
import Algorithms from './algorithms'
import Reviews from './reviews'
import Picture from './picture'
import Projects from './projects'


class ButtonBar extends React.Component {

        constructor (props) {
        super(props)
        this.state = {  aboutButton: false, 
                        contactButton: false, 
                        algorithmsButton: false, 
                        reviewsButton: false, 
                        pictureButton: false, 
                        projectsButton: false, 
                        componentToBeRendered: null
                    }
        this.toggleAbout = this.toggleAbout.bind(this)
        this.toggleContent = this.toggleContent.bind(this)
        this.toggleAlgorithms = this.toggleAlgorithms.bind(this)
        this.toggleReviews = this.toggleReviews.bind(this)
        this.togglePicture = this.togglePicture.bind(this)
        this.toggleProjects = this.toggleProjects.bind(this)
    }

    // toggle () {
    //     if (this.state.aboutButton) {
    //         this.setState({text: this.aboutText(), aboutButton: !this.state.aboutButton})
    //     }
    //     else {
    //         this.setState({text: null, aboutButton: !this.state.aboutButton})
    //     }    
    // }

   

    toggleAbout () {
        if (!this.state.aboutButton) {
            this.setState({componentToBeRendered: <About />, aboutButton: !this.state.aboutButton})
        }
        else {
            this.setState({componentToBeRendered: null, aboutButton: !this.state.aboutButton})
        }
    }

     toggleAlgorithms () {

    }

    toggleReviews () {

    }

   

    toggleContent () {
        
    }

     togglePicture () {
         if (!this.state.pictureButton) {
            this.setState({componentToBeRendered: <Picture />, pictureButton: !this.state.pictureButton})
        }
        else {
            this.setState({componentToBeRendered: null, pictureButton: !this.state.pictureButton})
        }
    }

    toggleProjects () {
        if (!this.state.projectsButton) {
            this.setState({componentToBeRendered: <Projects />, projectsButton: !this.state.projectsButton})
        }
        else {
            this.setState({componentToBeRendered: null, projectsButton: !this.state.projectsButton})
        }
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
                <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.toggleAlgorithms} >
                    Algorithms
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