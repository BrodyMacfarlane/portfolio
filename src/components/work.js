import React, { Component } from 'react'
// import dive from '../assets/DV.jpg'

export default class Work extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.pageCallback('work')
    }
    render(){
        return (
            <div className="component-container">
                <div className="projects">
                    <a href="http://dategen.io">
                        <div className="project date-project">DG</div>
                        <div className="project-title">DATE GEN</div>
                    </a>
                    <a href="http://divemusic.io">
                        <div className="project dive-project">DV</div>
                        <div className="project-title">DIVE MUSIC</div>
                    </a>
                    <a href="http://github.com/BrodyMacfarlane/sky-weather">
                        <div className="project sky-project">SK</div>
                        <div className="project-title">SKY WEATHER</div>
                    </a>
                </div>
            </div>
        )
    }    
}