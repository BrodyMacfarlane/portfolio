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
                    <a href="https://truvisiontools.com">
                        <div className="project date-project">TVT</div>
                        <div className="project-title">TRUVISION TOOLS</div>
                    </a>
                </div>
            </div>
        )
    }    
}