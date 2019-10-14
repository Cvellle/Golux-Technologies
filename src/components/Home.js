import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImg from '../images/mainImg.png';
import hexL from '../images/hexL.png';
import hexR from '../images/hexR.png';
import lab1 from '../images/backend.png';
import lab2 from '../images/frontend.png';
import lab3 from '../images/mobile.png';
import lab4 from '../images/design.png';
import lab5 from '../images/marketing.png';
import lab6 from '../images/business.png';
import yes from '../images/yes.svg';
import play1 from '../images/play1.png';
import play2 from '../images/play2.png';
import video from '../images/video.png';
import yuri from '../images/carouselImg1.png';
import logo from '../images/logo.png';
import next from '../images/next.svg';
import openMail from '../images/openMail.png';
import goluxWhite from '../images/goluxWhite.png';
import whiteUp from '../images/whiteUp.svg';
import './css/App.css'
import './css/home.css'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checked:true
    }
  }

  checkInput() {
    this.setState({ checked: !this.state.checked })
  }

  render() {

    return (
      <div>
        <div className="mainscreen">
          <img src={mainImg} className="d-block d-sm-none mx-auto"/>
          <div className="mainblock position-relative">
            <div className="d-md-flex justify-content-md-between" >
              <div className="col-xs-12 col-sm-6 text-left align-self-center p-0"> 
                <h1 className="align-self-center d-block">
                  A luxury fashion brand
                  for Digital Presence!
                </h1>
                <p className="align-self-center mainDescr">
                  Golux technologies creates the product you desire
                  with cutting edge technology and following the
                  latest trends in design and user experience
                </p>
              </div>
              <img src={mainImg} className="col-xs-12 d-none d-sm-flex justify-content-end"/>
            </div>          
              <button className="d-none d-sm-block mainBlockBtn justify-content-start">
                LEARN MORE
              </button>
              <button className="d-block d-sm-none">
                LEARN MORE
              </button>
          </div>  
        </div>
        
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

          <div className="play">
            <h2 className="text-center">Choose your play</h2>
            <div class="d-md-flex justify-content-md-between">

              <div className=" mx-auto col-sm-6 justify-content-center">
                <img src={play1} className="d-flex mx-auto justify-content-center"/>
                <h3 className="text-center mx-auto">Dedicated <span className="d-none d-sm-inline">teams</span></h3>
                <p className="text-center mx-auto">
                  We can assemble "your own Deicated Team"
                  which will be 100% tailored to your requirements,
                  wether you are running a software company, developing an
                  online business, or simply looking to expand your existing team.
                </p>
              </div>

              <span className="align-self-center mx-auto d-none d-sm-block">OR</span>

              <div className="mx-auto col-sm-6">
                <img src={play2} className="d-flex mx-auto justify-content-center"/>
                <h3 className="text-center mx-auto">
                  <span className="d-none d-sm-inline">Fixed price projects</span>
                  <span className="d-inline d-sm-none">Projects</span>
                </h3>
                <p className="text-center mx-auto">
                  We can also help you carry your digital ideas to life, by building exceptional
                  products from scracth. Q has delivered hundreds of custom made projects
                  for clients in 20 countries worldvide - from Alaska to Dubai. 
                </p>
              </div>

            </div>
          </div>    

          <div className="aboutus">
            <h2 className="text-center">
              We are <img src={logo} className="weareLogo"/>
            </h2>
            <div class="d-md-flex justify-content-md-between">
              <p className="text-left col-sm-5 align-self-top d-none d-sm-block">             
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="">                                      
                <video className="d-flex justify-content-end float-sm-right mx-auto align-self-start" poster={video}>
                  <source src="movie.mp4" type="video/mp4"/>
                </video>
                <p className="text-left col-sm-5 align-self-top d-block d-sm-none">             
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              </div>
            </div>
          </div>

          <div class="contactus">
            <div class="d-md-flex justify-content-sm-between bookDiv">
              <p className="text-center text-sm-left align-self-top">             
                Get quote
              </p>
              <div className="d-block mx-auto d-sm-flex mx-sm-0 float-sm-right align-self-start">
                <button className="d-block mx-auto d-sm-flex mx-sm-0 float-sm-right align-self-start">
                  <img src={whiteUp} className="d-inline-block my-auto"/>
                  <span>BOOK A CALL</span>
                </button>
              </div>
            </div>       
            <p className="d-block mx-auto text-center">
              SEND US AN EMAIL AND WE WILL GET BACK TO YOU IN NO TIME!
            </ p>
            <form>
              <div class="inputs mx-auto">
                <div class="d-md-flex justify-content-md-between mx-auto">
                  <div className="text-center text-sm-left align-self-top info">             
                    <input className="d-block" type="text"/>
                    <input className="d-block" type="mail"/>
                    <input className="d-block" type="mail"/>
                  </div>
                  <div className="textareaDiv d-flex mx-auto mx-sm-0 pull-sm-right align-self-start">
                    <textarea placeholder="Message">
                    </textarea>
                    <div class="triangle"></div>
                  </div>
                  
                </div>
                <div className="checkboxDiv" onClick={this.checkInput.bind(this)}>
                  <div className="d-inline-block align-self-center float-left">
                    {this.state.checked ?  <img src={yes}  ref="check"/> : null}
                  </div>
                  <input className="d-inline-block align-self-center float-left" type="checkbox"/>
                  <p>I would like to receive the Golux club Newsletter</p>
                </div>
              </div>
              <div class="workAndServ d-md-flex justify-content-md-between">
                <h3 className="text-center d-sm-none">WORK METHOD</h3>  
                <div className="work d-flex d-md-block d-block mx-auto"> 
                  <h3 className="text-center d-none d-sm-block">WORK METHOD</h3>  
                  <div className="mx-auto d-inline d-sm-block">
                    <img src={play1} alt="..." className="d-block mx-auto"/>
                    <p className="d-block mx-auto text-center">Dedicated team</p>
                  </div>          
                  <div className="mx-auto d-inline d-sm-block">
                    <img src={play2} alt="..." className="d-block mx-auto"/>
                    <p className="d-block mx-auto text-center">Dedicated team</p>
                  </div>  
                </div>
                <div className="d-flex justify-content-between services">
                  <div className="flex-wrapper d-flex ml-auto mr-auto">
                    <h3 className="text-center col-12">SERVICES</h3> 
                    <div className="mx-auto">           
                      <img src={lab1} alt="..." className="mx-auto d-block"/>
                      <p className="text-center">Backend</p>
                      <img src={lab4} alt="..." className="mx-auto d-block"/>
                      <p className="text-center">Design</p>
                    </div>
                    <div className="mx-auto">           
                      <img src={lab3} alt="..." className="mx-auto d-block"/>
                      <p className="text-center">Frontend</p>
                      <img src={lab5} alt="..." className="mx-auto d-block"/>
                      <p className="text-center">Marketing & SEO</p>
                    </div>
                    <div className="mx-auto">           
                      <img src={lab3} alt="..." className="mx-auto d-block"/>
                      <p className="text-center">Mobile dev</p>
                      <img src={lab6} alt="..." className="mx-auto d-block"/>
                      <p className="text-center">Business dev</p>
                    </div>
                  </div>
                </div>
              </div>
              <input type="submit" value="SEND INQUIRY" className="d-flex mx-auto mx-auto submit"/>
            </form>

          </div>

          <div className="clients">
            <h3 className="text-center">Kind words from our clients</h3>              
            <div id="carousel" className="carousel slide d-block mx-auto" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                <div className="carousel-item">
                  <img src={yuri} alt="..." className="d-block mx-auto"/>  
                  <p className="text-center d-block mx-auto descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="text-center d-block mx-auto">
                    Yuri Markov.
                  </p>
                  <p className="text-center d-block mx-auto">
                    Marketing director  @<span>FoFor</span> 
                  </p>
                </div>
                <div className="carousel-item">
                  <img src={yuri} alt="..." className="d-block mx-auto"/>  
                  <p className="text-center d-block mx-auto descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="text-center d-block mx-auto">
                    Yuri Markov.
                  </p>
                  <p className="text-center d-block mx-auto">
                    Marketing director  @<span>FoFor</span> 
                  </p>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <img src={next}/>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <img src={next}/>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="dashDiv text-center d-block mx-auto">
              <a href="#">View all clients</a>
              <div className="dash"></div>
            </div>

          </div>

          <div className="whyus">
            <h3 className="text-center">Why us?</h3>   
            <p className="text-center">
                We are developing software for clients in 20 countries.
            </p>           
            <div className="dashDiv text-center">
              <a href="">Company</a>
              <div className="dash"></div>
            </div>
          </div>

          <div className="subscribe">
            <div className="d-md-flex justify-content-md-between">
              <div className="col-sm-6 text-sm-left align-self-top">       
              <p className="d-none d-sm-block">
                Subscribe & get a hand picked list of the best development 
                links every week
              </p>      
               
              <div className="col-12 form-wrap d-none d-sm-flex justify-content-md-between align-content-center">
                <form className="my-auto d-flex justify-content-md-between">
                    <input type="email" placeholder="E-mail here"/>
                    <input className="" type="submit" value="SUBSCRIBE"/>
                </form>
              </div> 

              </div>
              <div className="col-sm-6 ">                                      
                <img className="d-flex justify-content-end float-sm-right mx-auto align-self-start" src={openMail}/>
              </div>
              
              <p className="d-block d-sm-none text-center">
                Subscribe & get a hand picked list of the best development 
                links every week
              </p>

              <div className="col-12 form-wrap d-flex d-sm-none justify-content-sm-between align-content-center">
                <form className="my-auto d-sm-flex justify-content-sm-between">
                    <input type="email" placeholder="E-mail here"/>
                    <input className="" type="submit" value="SUBSCRIBE"/>
                </form>
              </div> 

            </div>
          </div>

          <div className="join">
            <div className="d-md-flex justify-content-md-between align-self-center">      
              <img className="d-flex justify-content-end float-sm-right mx-auto mx-sm-0 align-self-center" src={goluxWhite}/>
              
              <div className="text-left align-self-top">      
                  <p className="text-left">
                     Join <b>Golux Club</b><br/>
                     and get special offers<br/>
                     from our team
                  </p>       
                  <input type="button" value="JOIN"/>
              </div>
            </div>
          </div>
        
      </div>
    )
  }
}

export default Home