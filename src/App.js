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
      quote: false
    };
  }

  prepareScroll = () => {
    // this.myRef = React.createRef() // Create a ref object 
    // myRef="quote"
    // alert("s")
    this.myRef.current.getAlert();
    console.log(this)
  }
  
  

  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header prepareScroll={this.prepareScroll}/>
            <div className="min">
              <Route exact path="/" component={Home} render={()=><Home ref={this.myRef}/>}/>
              <Route exact path="/presentation" component={Presentaion}/>
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