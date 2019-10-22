import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Presentaion from './components/Presentaion'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
    this.state = {
      intervalId: 0
    };
    
}



scrollStep() {
if (window.pageYOffset === 0) {
  clearInterval(this.state.intervalId);
}
window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
}

scrollToTop() {
let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
this.setState({ intervalId: intervalId });
}
  componentDidMount() {
    () => { this.scrollToTop(); }
  }
  
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header ref="ref"/>
            <div className="min">
              <Route exact path="/" component={Home}/>
              <Route exact path="/presentation" component={Presentaion}/>
            </div>  
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App