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
            <Link to="/about">
              <div className="title">
                <h1 className="title-text">BM</h1>
                <svg className="da-svg" width="100" height="100">
                  <line className="top-ani" x1="100" y1="0" x2="-200" y2="0" />
                  <line className="right-ani" x1="100" y1="100" x2="100" y2="-200" />
                  <line className="bot-ani" x1="0" y1="100" x2="300" y2="100" />
                  <line className="left-ani" x1="0" y1="0" x2="0" y2="300" />
                </svg>
              </div>
            </Link>
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