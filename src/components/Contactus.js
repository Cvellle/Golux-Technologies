import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import work1 from '../images/work1.png';
import work2 from '../images/work2.png';
import lab1 from '../images/backend.png';
import lab2 from '../images/frontend.png';
import lab3 from '../images/mobile.png';
import lab4 from '../images/design.png';
import lab5 from '../images/marketing.png';
import lab6 from '../images/business.png';
import yes from '../images/yes.svg';
import whiteUp from '../images/whiteUp.svg';
import './css/App.css'
import './css/home.css'
import './css/Contactus.css'


class Contactus extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          checked:true
        }
      }

    checkInput() {
        this.setState({ 
            checked: !this.state.checked
        })
    }
    
    render() {
        return (
            <div>
                <div class="contactus">
                    <div class="d-sm-flex justify-content-sm-between bookDiv">
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
                    </p>
                    <form>
                        <div class="inputs mx-auto">
                            <div class="d-sm-flex justify-content-sm-between mx-auto">
                            <div className="text-center text-sm-left align-self-top info">             
                                <input className="d-block pl-3" type="text" placeholder="Name"/>
                                <input className="d-block pl-3" type="mail" placeholder="E-mail"/>
                                <input className="d-block pl-3" type="text" placeholder="Profession"/>
                            </div>
                            <div className="textareaDiv d-flex mx-auto mx-sm-0 pull-sm-right align-self-start">
                                <textarea placeholder="Message" className="d-block pl-3">
                                </textarea>
                                <div class="triangle"></div>
                            </div>
                            </div>
                            <div className="checkboxDiv">
                                <div className="d-inline-block align-self-center float-left"  onClick={this.checkInput.bind(this)}>
                                    {this.state.checked ?  <img src={yes}  ref="check"/> : null}
                                </div>
                                <input ref="check" checked={this.state.checked ? true : false} className="d-inline-block align-self-center float-left" type="checkbox"/>
                                <p>I would like to receive the Golux club Newsletter</p>
                            </div>
                        </div>
                        <WorkAndServ/>
                        <input type="submit" value="SEND INQUIRY" className="d-flex mx-auto mx-auto submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

const WorkAndServ = props => { 
    return (
        <div class="workAndServ d-sm-flex justify-content-sm-between">
            <h3 className="text-center d-sm-none">WORK METHOD</h3>  
            <div className="work d-flex d-sm-block d-block mx-auto mx-sm-0"> 
                <h3 className="text-center d-none d-sm-block">WORK METHOD</h3>  
                <div className="mx-auto d-inline d-sm-block">
                    <img src={work1} alt="..." className="d-block mx-auto"/>
                    <p className="d-block mx-auto text-center">Dedicated team</p>
                </div>          
                <div className="mx-auto d-inline d-sm-block">
                    <img src={work2} alt="..." className="d-block mx-auto"/>
                    <p className="d-block mx-auto text-center">Project team</p>
                </div>  
            </div>
            <div className="d-flex justify-content-between services">
                <div className="flex-wrapper d-flex ml-auto mr-auto">
                    <h3 className="text-center col-12">SERVICES</h3> 
                    <WSColumn url1={lab1} url2={lab4} name1="Backend" name2="Design"/>
                    <WSColumn url1={lab2} url2={lab5} name1="Frontend" name2="Marketing & SEO"/>
                    <WSColumn url1={lab3} url2={lab6} name1="Mobile Dev" name2="Business dev"/>
                </div>
            </div>
        </div>
    )
}

const WSColumn = props => { 
    return (
        <div className="mx-auto">           
            <img src={props.url1} alt="..." className="mx-auto d-block"/>
            <p className="text-center mx-auto">{props.name1}</p>
            <img src={props.url2} alt="..." className="mx-auto d-block"/>
            <p className="text-center mx-auto">{props.name2}</p>
        </div>
    )
}

export default Contactus

