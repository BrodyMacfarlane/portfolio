import React, { Component } from 'react'
// import dive from '../assets/DV.jpg'

export default class Work extends Component {
    render(){
        return (
            <div className="component-container">
                <div className="projects">
                    <a href="http://dategen.io">
                        <div className="project date-project">DG</div>
                    </a>
                    <a href="http://divemusic.io">
                        <div className="project dive-project">DV</div>
                    </a>
                    <a href="http://github.com">
                        <div className="project sky-project">SK</div>
                    </a>
                </div>
            </div>
        )
    }    
}