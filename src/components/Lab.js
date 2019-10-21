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

    moveLeft() {
        this.refs.learn.style="transform: translatex(25%);"
    }

    moveRight() {
        this.refs.learn.style="transform: translatex(0%);"
    }

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
                    <div className="dashDiv" onMouseOver={this.moveLeft.bind(this)} onMouseOut={this.moveRight.bind(this)}>
                        <div className="price pull-left"></div>
                        <a href="#" ref="learn" className="learn d-flex justify-content-center" role="button">our tools</a>
                        <div ref="dash" className="text-center dash"></div>
                    </div>

                    <div className="container software">
                        <h3 className="text-center">SOFTWARE DEVELOPMENT</h3>
                        <div className="row">
                            <Card title="BACKEND WEB DEVELOPMENT" url={lab1} des1="Custtom functionalities" des2="Databases" des3="Administration" left="left"/>
                            <Card title="FRONTEND WEB DEVELOPMENT" url={lab2} des1="HTML" des2="CSS" des3="JavaScript"/>
                            <Card title="MOBILE DEVELOPMENT" url={lab3} des1="Android Apps" des2="iOS Apps" des3="Web"/>
                        </div>
                    </div>

                    <div className="container design">
                        <h3 className="text-center">DESIGN | MARKETING | CONSULTING</h3>
                        <div className="row">
                            <Card title="DESIGN" url={lab4} des1="Branding" des2="UX/UI Design" des3="Custom Design"/>
                            <Card title="MARKETING & SEO" url={lab5}  left="left" des1="Sales Strategy" des2="We Analytics" des3="Keyword campaigns"/>
                            <Card title="BUSINESS CONSULTING" url={lab6} des1="Business Dev" des2="Goal-Attaining" des3="Problem solving"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Card extends React.Component {

    moveLeft() {
        this.refs.learn.style="transform: translatex(30%);"
        this.refs.dash.style="transform: translatex(-30%);" 
    }

    moveRight() {
        this.refs.learn.style="transform: translatex(0%);"
        this.refs.dash.style="transform: translatex(0%);" 
    }


    render() {
  
      return (
        <div className={`col-12 col-sm-4 ${this.props.left}`}>
            <div className="card border-0">
                <img src={this.props.url} alt="..." className="card-img mx-auto"/>
                <div className="caption">
                    <h4 className="text-center mx-auto">{this.props.title}</h4>
                    <p className="text-left"><img src={yes} className="yes"/>{this.props.des1}</p>
                    <p className="text-left"><img src={yes} className="yes"/>{this.props.des2}</p>
                    <p className="text-left"><img src={yes} className="yes"/>{this.props.des3}</p>
                    <div className="dashDiv" onMouseOver={this.moveLeft.bind(this)} onMouseOut={this.moveRight.bind(this)}>
                        <div href="#" ref="learn" className="learn d-flex mx-auto justify-content-center" role="button">
                            <span className="mx-auto text-center">Learn more</span>
                            <div ref="dash" className="mx-auto text-center dash"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Lab

