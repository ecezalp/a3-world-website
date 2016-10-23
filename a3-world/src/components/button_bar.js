import React from 'react'
import { Button, DropdownButton, MenuItem, ButtonToolbar, Popover, OverlayTrigger, Transition, Fade } from 'react-bootstrap'
import About from './about_me'
import Contact from './contact'
import Algorithms from './algorithms'
import Reviews from './reviews'
import Picture from './picture'


class ButtonBar extends React.Component {

        constructor (props) {
        super(props)
        this.state = {componentToBeRendered: null, open: false}
        this.toggleAbout = this.toggleAbout.bind(this)
        this.toggleContact = this.toggleContact.bind(this)
        // this.toggleAlgorithms = this.toggleAlgorithms.bind(this)
        this.toggleReviews = this.toggleReviews.bind(this)
        this.togglePicture = this.togglePicture.bind(this)
        // this.onElementChange = this.onElementChange.bind(this)
    }

    falsifyOpen () {
        this.setState({open: false})
    }

    toggleAbout () {
        this.falsifyOpen()
        this.setState({componentToBeRendered: <About />, open: true})
    }

    //  toggleAlgorithms (algNum) {
    //     this.setState({componentToBeRendered: <Algorithms />})
    //  <img src="../assets/algorithms/{this.props.algNum}" />
    // }

    toggleReviews () {
        this.falsifyOpen()
        this.setState({componentToBeRendered: <Reviews />, open: true})
    }

    toggleContact () {
        this.falsifyOpen()
        this.setState({componentToBeRendered: <Contact />, open: true})
    }

     togglePicture () {
        this.falsifyOpen()
        this.setState({componentToBeRendered: <Picture />, open: true})
    }

    // onElementChange() {
    //     var a = this.state.componentToBeRendered
    //     if (a !== this.state.componentToBeRendered){
    //         return true
    //     }
    // detects when element is changed, and allows fade to happen
    // }


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

                    <DropdownButton className="black-button" bsStyle="warning" bsSize="large" key={1} title={"Algorithms"}>
                        <MenuItem eventKey="1">Project Euler 1</MenuItem>
                        <MenuItem eventKey="2">Project Euler 2</MenuItem>
                        <MenuItem eventKey="3">Project Euler 3</MenuItem>
                        <MenuItem eventKey="4">Project Euler 5</MenuItem>
                        <MenuItem eventKey="5">Project Euler 6</MenuItem>
                    </DropdownButton>
                    
                    <DropdownButton className="black-button" bsStyle="warning" bsSize="large" key={2} title={"Reviews"}>
                        <MenuItem eventKey="1">POODR - Object Oriented Design</MenuItem>
                        <MenuItem eventKey="2">POODR - Designing Classes with a Single Responsibility</MenuItem>
                        <MenuItem eventKey="3">jQuery in Action - Bringing Pages to Life with jQuery</MenuItem>
                        <MenuItem eventKey="4">React Docs - Animation</MenuItem>
                    </DropdownButton>
                
                    <DropdownButton className="black-button" bsStyle="warning" bsSize="large" key={3} title={"Projects"}>
                        <MenuItem eventKey="1">TwitchRuns</MenuItem>
                        <MenuItem eventKey="2">King of The Page</MenuItem>
                        <MenuItem eventKey="3">a3.world</MenuItem>
                        <MenuItem eventKey="4">Linques</MenuItem>
                        <MenuItem eventKey="5">Cat Fact!</MenuItem>
                    </DropdownButton>

                    <Button className="black-button" bsStyle="warning" bsSize="large" onClick={this.togglePicture} >
                        Pictures
                    </Button>

                </ButtonToolbar> 
                
                <Fade in={this.state.open}>
                    <div className="middle-main-div">
                        {this.state.componentToBeRendered}
                    </div>
                </Fade >
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