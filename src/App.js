import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Presentaion from './components/Presentaion'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
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