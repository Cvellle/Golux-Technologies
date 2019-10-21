import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import yuri from '../images/carouselImg1.png';
import next from '../images/next.svg';
import './css/App.css'
import './css/home.css'

class Clients extends React.Component {

  moveLeft() {
    this.refs.learn.style="margin-left:3vw"
  
  }
  
  moveRight() {
      this.refs.learn.style="transform: translatex(0%);"
  }

  render() {
      
    return (
        <div className="clients">
            <h3 className="text-center">Kind words from our clients</h3>              
            <div id="carousel" className="carousel slide d-block mx-auto" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <CarouselItem active="active"/>
                <CarouselItem active=""/>
                <CarouselItem active=""/>
              </div>
              <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <img src={next}/>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <img src={next}/>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="dashDiv text-center d-block mx-auto" ref="dashDiv" onMouseOver={this.moveLeft.bind(this)} onMouseOut={this.moveRight.bind(this)}>
              <span href="#" ref="learn">View all clients</span>
              <div className="dash"></div>
            </div>
        </div>
      )
   }
}

const CarouselItem = props => { 
    return (
        <div className={`carousel-item ${props.active}`}>
            <img src={yuri} alt="..." className="d-block mx-auto"/>  
            <p className="text-center d-block mx-auto descr">
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-center d-block mx-auto">
            Yuri Markov.
            </p>
            <p className="text-center d-block mx-auto">
            Marketing director @<span>FoFor</span> 
            </p>
        </div>
    )
}

export default Clients

