import React from 'react'
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
          <div className="dashdiv text-center mx-auto mx-md-0">
            <p>our tools</p>
            <div className="text-center dash"></div>
          </div>

          <div className="container software">
              <h3 className="text-center">SOFTWARE DEVELOPMENT</h3>
              <div className="row">
                <div className="col-12 col-sm-4 backend">
                    <div className="card border-0">
                        <img src={lab1} alt="..." className="card-img mx-auto"/>
                        <div className="caption">
                            <h4 className="text-center mx-auto">BACKEND WEB DEVELOPMENT</h4>
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
                <div className="col-12 col-sm-4">
                    <div className="card border-0">
                        <img src={lab2} alt="..." className="card-img mx-auto"/>
                        <div className="caption">
                            <h4 className="text-center mx-auto">FRONTEND WEB DEVELOPMENT</h4>
                            <p className="text-left"><img src={yes} className="yes"/>HTML</p>
                            <p className="text-left"><img src={yes} className="yes"/>CSS</p>
                            <p className="text-left"><img src={yes} className="yes"/>JavaScript</p>
                              <div className="clearfix dashDiv frontend">
                                <a href="#" className="learn d-flex justify-content-center" role="button">Learn more</a>
                                <div className="text-center dash"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card border-0">
                        <img src={lab3} alt="..." className="card-img mx-auto"/>
                        <div className="caption">
                            <h4 className="text-center mx-auto">MOBILE DEVELOPMENT</h4>
                            <p className="text-left"><img src={yes} className="yes"/>Android Apps</p>
                            <p className="text-left"><img src={yes} className="yes"/>IOS Apps</p>
                            <p className="text-left"><img src={yes} className="yes"/>Web Apps</p>
                            <div className="clearfix dashDiv mobile">
                                <a href="#" className="learn d-flex justify-content-center" role="button">Learn more</a>
                                <div className="text-center dash"></div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
            </div>

            <div className="container design">
              <h3 className="text-center">DESIGN | MARKETING | CONSULTING</h3>
              <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="card border-0">
                        <img src={lab4} alt="..." className="card-img mx-auto"/>
                        <div className="caption">
                            <div className="cardTitle">
                              <h4 className="text-center mx-auto">DESIGN</h4>
                            </div>
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
                <div className="col-12 col-sm-4">
                    <div className="card border-0">
                        <img src={lab5} alt="..." className="card-img mx-auto"/>
                        <div className="caption">
                            <h4 className="text-center mx-auto">MARKETING & SEO</h4>
                            <p className="text-left"><img src={yes} className="yes"/>HTML</p>
                            <p className="text-left"><img src={yes} className="yes"/>CSS</p>
                            <p className="text-left"><img src={yes} className="yes"/>JavaScript</p>
                            <div className="clearfix dashDiv">
                                <a href="#" className="learn d-flex justify-content-center" role="button">Learn more</a>
                                <div className="text-center dash"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="card border-0">
                        <img src={lab6} alt="..." className="card-img mx-auto"/>
                        <div className="caption">
                            <h4 className="text-center mx-auto">BUSINESS CONSULTING</h4>
                            <p className="text-left"><img src={yes} className="yes"/>Android Apps</p>
                            <p className="text-left"><img src={yes} className="yes"/>IOS Apps</p>
                            <p className="text-left"><img src={yes} className="yes"/>Web Apps</p>
                            <div className="clearfix dashDiv">
                                <a href="#" className="learn d-flex justify-content-center" role="button">Learn more</a>
                                <div className="text-center dash"></div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
            </div>
          </div>
        
      </div>
    )
  }
}

export default Lab

