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
                <div className="about-content about-text">
                    <h2 className="about-about">ABOUT</h2>
                    <p>I am a web developer/designer who is very passionate about aesthetic, animation, and code hygiene.  I love learning new technologies, innovating ways to conquer real-world problems, and enjoy tackling challenges and venturing into rougher seas.  I love building knowledge of frameworks and libraries, and adapting to the ever-changing industry of software development.</p>
                </div>
            </div>
        )
    }    
}