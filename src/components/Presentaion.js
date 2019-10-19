import React from 'react'
import { NavLink } from 'react-router-dom'
import Subscribe from './Subscribe'
import Join from './Join'
import multiLogo from '../images/multiLogo.png';
import download from '../images/download.png';
import downloadRed from '../images/downloadRed.png';
import goluxLett from '../images/goluxLett.png';
import building from '../images/building.png';
import diamond from '../images/diamond.png';
import desk from '../images/desk.png';
import stairs from '../images/stairs.png';
import hexLogo from '../images/grayHex.png';
import reactAng from '../images/reactAng.png';
import share from '../images/share.png';
import hand from '../images/hand.png';
import profileBlue from '../images/profileBlue.svg';
import './css/presentation.css'

class Presentaion extends React.Component {

  render() {

    return (
      <div className="presentaion">
        <div className="topDiv w-100"></div>
        <div className="logoDiv d-sm-flex justify-content-between">
          <div className="d-block d-sm-inline-block">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <img src={goluxLett} className="logo d-block"/>
          </div>
          <div className="descr d-block d-sm-inline-block my-auto">
            <div className="d-inline-block">
              <b>Specific info about company, values and philosophy. </b>
              Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis, Sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis 
            </div>
             <button className="d-block mx-auto">
               <img src={download} className="d-inline-block align-self-center mb-1"/>
              <span className="d-inline-block align-self-center">DOWNLOAD MEDIA KIT</span>
             </button>
          </div>
        </div>

        <div className="values mx-auto">
          <ImageBlock url={building} name={"COMPANY"}/>
          <ImageBlock url={diamond} name={"VALUES"}/>
          <ImageBlock url={desk} name={"TEAM"}/>
          <ImageBlock url={stairs} name={"CAREERS"}/>
        </div>

        <div className="niche d-sm-flex justify-content-between">
          <div className="d-block d-sm-inline-block">
            <img src={profileBlue} className="hexTransparent d-block mx-auto"/>
          </div>
          <div>
            
          </div>
          <div className="descr d-block d-sm-inline-block mx-auto">
            <h3 className="text-center">
              Golux niche
            </h3>
            <div className="text-center">
              <b>Description of nitche here. </b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut, 
              deserunt mollit anim id est laborum, sint occaecat cupidatat non proident.
            </div>
          </div>
        </div>

        <div className="loyality mx-auto">
          <h2 className="text-center">Loyality programs</h2>
          <p className="text-center">
            We're constantly stayingon the edge of the new technology, taking the best
            changing, adapting to what fits us the best. We never stop at just "good enough",
            but always strive for great - and then some more. Our loyal clients caught
            a glimpse for that.
          </p>
          <ImageBlock url={hexLogo} name={"LOYALITY PROGRAM"}/>
          <ImageBlock url={hexLogo} name={"LOYALITY PROGRAM"}/>
          <ImageBlock url={hexLogo} name={"LOYALITY PROGRAM"}/>
        </div>

        <div className="reactAngular mx-auto">
          <div className="reactAngularL d-sm-inline-block mx-auto">
            <img src={reactAng} className="d-block mx-auto"/>
            <div className="share d-block mx-auto">
              <h4 className="text-left">React vs. Angular. Battle for the Front-end</h4>
              <p className="text-left">Yuri Markov</p>
              <p className="text-left">19 June. 2019</p>
              <p className="text-left">7 min read</p>
              <img src={share} className="float-sm-right d-sm-inline-block"/>
            </div>
          </div>
          <div className="reactAngularR d-sm-inline-block mx-auto float-sm-right">
            <div className="d-block mx-auto">
              <h4 className="text-left">React vs. Angular. Battle for the Front-end</h4>
              <p className="text-left">Anastasiia Avranmenko</p>
            </div>
            <div className="d-block mx-auto">
              <h4 className="text-left">Google Sheets Tutorial for Begineers</h4>
              <p className="text-left">Artur Hebda</p>
            </div>
            <div className="d-block mx-auto">
              <h4 className="text-left">Product Development Roadmap - Your 
                Guide Through the Producy Strategy</h4>
              <p className="text-left">Yuri Markov</p>
            </div>
            <div className="d-block mx-auto">
              <h4 className="text-left">React vs. Angular. Battle for the Front-end</h4>
              <p className="text-left">Anastasiia Avranmenko</p>
            </div>
          </div>
        </div>

        <div className="download mx-auto">
          <div className="d-sm-inline-block mx-auto">
            <button className="leftButton">
              <img src={hand} className="d-sm-inline-block"/>
              CLIENTS
            </button>
          </div>
          <div className="d-sm-inline-block float-sm-right ">
            <button className="rightButton">
              <img src={downloadRed} className="d-sm-inline-block"/>
              <span>DOWNLOAD PRESENTATION</span>
            </button>
          </div>
        </div>
        
        <div className="partners">
          <h3 className="text-center">
            Golux partners
          </h3>
          <div>
            <div className="hexLine1 d-inline d-sm-flex justify-content-center">
              <div className="mx-auto">
                <div className="hexDiv d-inline-flex mx-auto">
                  <span>LOGO</span>
                </div>
                <div className="hexDiv d-inline-flex mx-auto">
                  <span>LOGO</span>
                </div>
                <div className="hexDiv d-inline-flex mx-auto">
                  <span>LOGO</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hexLine2 d-inline d-sm-flex justify-content-center hex2line2">
            <div className="mx-auto">
              <div className="hexDiv d-inline-flex float-right">
                <span>LOGO</span>
              </div>
              <div className="hexDiv d-inline-flex float-left">
                <span>LOGO</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Subscribe/>
          <Join/>
        </div>
      </div>
    )
  }
}

const ImageBlock = props => { 
  return (
    <div className="d-sm-inline-flex justify-content-between">
      <div className="mx-auto">
        <img src={props.url} className="d-block mx-auto"/>
        <p className="text-center">{props.name}</p>
      </div> 
    </div>
  )
}

export default Presentaion
