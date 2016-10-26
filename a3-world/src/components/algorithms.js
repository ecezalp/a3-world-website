import React from 'react'
import one from '../assets/algorithms/one.png'
import six from '../assets/algorithms/six.png'

class Algorithms extends React.Component {
   
    constructor () {
        super()
        this.findPic = this.findPic.bind(this)
    }

    algorithms() {
        const algorithms = [{id: 1, title: "hey", pic: one, desc: "hehehehehe"}, {id: 6, title: "yaa", pic: six, desc: "aasssaa"} ]
        return algorithms
    }


   findPic () {
       var currentId = this.props.params.id
        return this.algorithms().find( (algorithm)=> algorithm["id"] === currentId).pic
    }

   render () {
       return (
           {}
       )
   }
}  

export default Algorithms