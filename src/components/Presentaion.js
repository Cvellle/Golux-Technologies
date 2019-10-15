import React from 'react'
import { NavLink } from 'react-router-dom'
import multiLogo from '../images/multiLogo.png';
import download from '../images/download.png';
import goluxLett from '../images/goluxLett.png';
import hexLogo from '../images/design.png';
import profileBlue from '../images/profileBlue.svg';
import hamb from '../images/hamb.svg';
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
          <div>      
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
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">VALUES</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">TEAM</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">CAREERS</p>
          </div>
        </div>

        <div className="niche d-sm-flex justify-content-between">
          <div className="d-block d-sm-inline-block">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
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
          <h2 className="text-center">Loyality</h2>
          <p className="text-center">
            We're constantly stayingon theedgeof the new technology
          </p>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">VALUES</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">TEAM</p>
          </div>
        </div>

        <div className="loyality mx-auto">
          <h2 className="text-center">Loyality</h2>
          <p className="text-center">
            We're constantly stayingon theedgeof the new technology
          </p>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">VALUES</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={profileBlue} className="multiLogo d-block mx-auto"/>
            <p className="text-center">TEAM</p>
          </div>
        </div>

        <div className="reactAngular mx-auto">
          <div className="reactAngularL d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <div className="share d-block mx-auto">
              <h4 className="text-left">VALUES</h4>
              <p className="text-left">COMPANY</p>
              <p className="text-left">COMPANY</p>
              <p className="text-left">COMPANY</p>
              <img src={multiLogo} className="float-sm-right d-sm-inline-block"/>
            </div>
          </div>
          <div className="reactAngularR d-sm-inline-block mx-auto float-sm-right">
            <div className="d-block mx-auto">
              <h4 className="text-left">VALUES</h4>
              <p className="text-left">VALUES</p>
            </div>
            <div className="d-block mx-auto">
              <h4 className="text-left">VALUES</h4>
              <p className="text-left">VALUES</p>
            </div>
            <div className="d-block mx-auto">
              <h4 className="text-left">VALUES</h4>
              <p className="text-left">VALUES</p>
            </div>
            <div className="d-block mx-auto">
              <h4 className="text-left">VALUES</h4>
              <p className="text-left">VALUES</p>
            </div>
          </div>
        </div>

        <div className="download mx-auto">
          <div className="d-sm-inline-block mx-auto">
            <button>
              <img src={profileBlue} className="d-sm-inline-block"/>
              CLIENTS
            </button>
          </div>
          <div className="d-sm-inline-block float-sm-right ">
            <button>
              <img src={profileBlue} className="d-sm-inline-block"/>
              <span>DOWNLOAD PRESENTATION</span>
            </button>
          </div>
        </div>
        
        <div className="partners">
          <div className="d-flex justify-content-center">
            <div className="mx-auto">
              <div className="d-sm-inline-block mx-auto">
                <img src={hexLogo} className="d-block mx-auto h-100"/>
              </div>
              <div className="d-sm-inline-block mx-auto">
                <img src={hexLogo} className="d-block mx-auto h-100"/>
              </div>
              <div className="d-sm-inline-block mx-auto">
                <img src={hexLogo} className="d-block mx-auto h-100"/>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="mx-auto">
              <div className="d-sm-block float-right">
                <img src={hexLogo} className="d-block mx-auto"/>
              </div>
              <div className="d-sm-inline-block float-left">
                <img src={hexLogo} className="d-block mx-auto"/>
              </div>
            </div>>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Presentaion
