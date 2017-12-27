import React, { Component } from 'react';
import {HashRouter, Route, Link, Redirect} from 'react-router-dom';
import Work from './components/work';
import About from './components/about';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comp: 'work'
    }
    this.setAbout = this.setAbout.bind(this)
    this.setWork = this.setWork.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    console.log(this.props)
  }
  setAbout(){
    this.setState({comp: "about"})
  }
  setWork(){
    this.setState({comp: "work"})
  }
  render() {
    return (
      <HashRouter>
        <div className="App" onClick={this.handleClick}>
          <div className="navBar">
            <h1 className="title">BRODY MACFARLANE</h1>
            <div className="right-nav">
              <div className="work"><Link onClick={this.setWork} id={this.state.comp === "work" ? "onComp" : null} to="/work">WORK</Link></div>
              <div className="about"><Link onClick={this.setAbout} id={this.state.comp === "about" ? "onComp" : null} to="/about">ABOUT</Link></div>
            </div>
          </div>
            <div>
              <Redirect from="/" to="/work" />
              <Route path='/work' component={Work} exact />
              <Route path='/about' component={About} />
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;