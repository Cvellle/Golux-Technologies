import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import hexL from '../images/hexL.png';
import hexR from '../images/hexR.png';
import lab1 from '../images/backend.png';
import lab2 from '../images/frontend.png';
import lab3 from '../images/mobile.png';
import lab4 from '../images/design.png';
import lab5 from '../images/marketing.png';
import lab6 from '../images/business.png';
import yes from '../images/yes.svg';
import './css/App.css'
import './css/home.css'

class Lab extends React.Component {

  render() {

    return (
        <div>
            <div className="lab">
                <img src={hexL} className="position-absolute hex1"/>
                <img src={hexR} className="position-absolute hex2"/>
                <h2 className="text-center">Golux lab</h2>
                <p className="text-center labDescr mx-auto">
                    We never build something your business doesn't need. Our developers live for the
                    thrill, and break the boundries of digital. By engaging even one developer, you
                    receive an entire machinery of experts to back you up. Whatever the Q, we got the A.
                </p>
                <div className="dashdiv text-center mx-auto mx-sm-0">
                    <p>our tools</p>
                    <div className="text-center dash"></div>
                </div>

                <div className="container software">
                    <h3 className="text-center">SOFTWARE DEVELOPMENT</h3>
                    <div className="row">
                        <Card title="BACKEND DEVELOPMENT" url={lab1}/>
                        <Card title="FRONTEND DEVELOPMENT" url={lab2}/>
                        <Card title="MOBILE DEVELOPMENT" url={lab3}/>
                    </div>
                </div>

                <div className="container design">
                    <h3 className="text-center">DESIGN | MARKETING | CONSULTING</h3>
                    <div className="row">
                        <Card title="DESIGN" url={lab4}/>
                        <Card title="MARKETING & SEO" url={lab5}/>
                        <Card title="BUSINESS CONSULTING" url={lab6}/>
                    </div>
                </div>
            </div>
        </div>
      )
   }
}

const Card = props => { 
    return (
        <div className="col-12 col-sm-4 backend">
            <div className="card border-0">
                <img src={props.url} alt="..." className="card-img mx-auto"/>
                <div className="caption">
                    <h4 className="text-center mx-auto">{props.title}</h4>
                    <p className="text-left"><img src={yes} className="yes"/>Custom functionalities</p>
                    <p className="text-left"><img src={yes} className="yes"/>Databases</p>
                    <p className="text-left"><img src={yes} className="yes"/>Administration</p>
                    <div className="clearfix dashDiv">
                        <div className="price pull-left"></div>
                        <a href="#" className="learn d-flex justify-content-center" role="button">Learn more</a>
                        <div className="text-center dash"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lab

