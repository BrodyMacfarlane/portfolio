import React, { Component } from 'react'
import code from '../assets/images/code.png'
// import dive from '../assets/DV.jpg'

export default class About extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.pageCallback('about')
    }
    render(){
        return (
            <div className="component-container">
                <img className="code-pic about-content" src={code}/>
                <div className="about-content">
                    <h2>About</h2>
                    <p>I am a web developer/designer who is very passionate about aesthetic, animation, and code hygiene.  I love learning new things, and enjoy tackling new challenges and venturing into rougher seas.  I love building knowledge of new frameworks and libraries, and adapting to the ever-changing industry of software development.</p>
                </div>
            </div>
        )
    }    
}