import React, { Component } from 'react';
import {HashRouter, Route, Link, Redirect} from 'react-router-dom';
import Work from './components/work';
import About from './components/about';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comp: ''
    }
  }
  getPage = (data) => {
    this.setState({comp: data})
    console.log(this.state)
  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="navBar">
            <Link to="/about"><h1 className="title">BM</h1></Link>
            <div className="right-nav">
              <div className="work"><Link id={this.state.comp === "work" ? "onComp" : null} to="/work">WORK</Link></div>
              <div className="about"><Link id={this.state.comp === "about" ? "onComp" : null} to="/about">ABOUT</Link></div>
            </div>
          </div>
            <div>
              <Redirect from="/" to="/work" />
              <Route path='/work' render={(routeProps) => (<Work pageCallback={this.getPage} {...routeProps} />)}/>
              <Route path='/about' render={(routeProps) => (<About pageCallback={this.getPage} {...routeProps} />)}/>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;