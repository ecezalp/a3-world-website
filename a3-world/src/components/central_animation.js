import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class CentralAnimation extends React.Component {
    constructor(props) {
    super(props);
    // this.state.texts = {zero: this.animationText()[0], one: this.animationText()[1], two: this.animationText()[2]}
    }

    animationText () {
        const textZero = (<h1><i> My functions </i> return true </h1>)
        const textOne = (<h1><i> My terminal </i> clear; </h1>)
        const textTwo = (<h1><i> My commits </i> merge easily </h1>)
        
        return([textZero, textOne, textTwo])

        // if (this.state.currentText === 0) {
        //     this.setState.currentText = 1
        //     return textOne
        // }
        // if (this.state.currentText === 1) {
        //     this.setState.currentText = 2
        //     return textTwo
        // }
        // if (this.state.currentText === 2) {
        //     this.setState.currentText = 0
        //     return textZero
        // }
    }

    // animation() {
    //     setTimeout(this.state.texts.zero, 500).then(setTimeout(this.state.texts.one, 500))
    // }

    constructionText () {
        return (<h5>This application is currently under construction, please visit <a href="http://orientingobjects.wordpress.com">this page</a> until Monday!</h5>)
    }

    render () {
        return (<ReactCSSTransitionGroup
        transitionName="example" 
        transitionEnterTimeout={500} 
        transitionLeaveTimeout={300}>
        {this.constructionText()}
        </ReactCSSTransitionGroup>)
    }
}

    export default CentralAnimation
    



















//   render() {
//     var items = this.state.items.map((item, i) => (
//       <div key={item} onClick={() => this.handleRemove(i)}>
//         {item}
//       </div>
//     ));

//     return (
//       <div>
//         <button onClick={this.handleAdd}>Add Item</button>
//         <ReactCSSTransitionGroup 
//           transitionName="example" 
//           transitionEnterTimeout={500} 
//           transitionLeaveTimeout={500}>
//           {items}
//         </ReactCSSTransitionGroup>
//       </div>
//     );
//   }
// }
















//   constructor(props) {
//     super(props);
//   }

//   render() {
 

//     return (
//       <div>
//         <ReactCSSTransitionGroup 
//           transitionName="example" 
//           transitionEnterTimeout={500} 
//           transitionLeaveTimeout={300}>
//           {items}
//         </ReactCSSTransitionGroup>
//       </div>
//     );
//   }
// }



//    var items = [(<div key={1}> Helloooo </div>), (<div key={2}> Heyyyy </div>), (<div key={3}> Suppp </div>) ]










// export default function () {

//    
//     return (<h1> HELLOOOO</h1>)
// }