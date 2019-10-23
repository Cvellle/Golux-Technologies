import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Presentaion from './components/Presentaion'
import Work from './components/Work'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      quote: true
    };
  }

  prepareScrollQuote = () => {
    this.myRef.current.scrollQuote();
    this.setState({ 
      quote: true
  })
  }

  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header prepareScroll={this.prepareScrollQuote.bind(this)}/>
            <div className="min">
              <Route exact path="/" render={()=><Home ref={this.myRef} quote={this.state.quote}/>}/>
    <Route exact path="/presentation" render={()=><Presentaion ref={this.myRef} quote={this.state.quote}/>}/>
              <Route exact path="/our-work" component={Work}/>              
            </div>  
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App