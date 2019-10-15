import React from 'react'
import { NavLink } from 'react-router-dom'
import multiLogo from '../images/multiLogo.png';
import goluxLett from '../images/goluxLett.png';
import profileBlue from '../images/profileBlue.svg';
import hamb from '../images/hamb.svg';
import './css/presentation.css'

class Presentaion extends React.Component {

  render() {

    return (
      <div className="presentaion">

        <div className="logoDiv d-sm-flex justify-content-between">
          <div className="d-block d-sm-inline-block">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <img src={goluxLett} className="logo d-block"/>
          </div>
          <div>
            
          </div>
          <div className="descr d-block d-sm-inline-block mx-auto my-auto">
            <div className="d-inline-block">
              <b>Specific info about company, values and philosophy. </b>
              Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis, Sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis 
            </div>
             <button className="d-block mx-auto">Download media kit</button>
          </div>
        </div>

        <div className="values mx-auto">
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">VALUES</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">TEAM</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">CAREERS</p>
          </div>
        </div>


        <div className="niche d-sm-flex justify-content-between">
          <div className="d-block d-sm-inline-block">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
          </div>
          <div>
            
          </div>
          <div className="descr d-block d-sm-inline-block mx-auto">
            <div className="">
              <b>Description of nitche here. </b>
              Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis, Sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis 
            </div>
          </div>
        </div>

        <div className="loyality mx-auto">
          <h2 className="text-center">Loyality</h2>
          <p className="text-center">
            We're constantly stayingon theedgeof the new technology
          </p>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">VALUES</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">TEAM</p>
          </div>
        </div>

        <div className="loyality mx-auto">
          <h2 className="text-center">Loyality</h2>
          <p className="text-center">
            We're constantly stayingon theedgeof the new technology
          </p>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">VALUES</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
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
              <img src={multiLogo} className="d-sm-inline-block"/>
              CLIENTS
            </button>
          </div>
          <div className="d-sm-inline-block float-sm-right ">
            <button>
              <img src={multiLogo} className="d-sm-inline-block d-sm-inline-block"/>
              <span>DOWNLOAD PRESENTATION</span>
            </button>
          </div>
        </div>
        
        <div className="partners d-flex justify-content-between">
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block mx-auto">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div> 
        </div>
        <div className="partners d-flex justify-content-between">
          <div className="d-sm-inline-block float-right">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>
          <div className="d-sm-inline-block float-left">
            <img src={multiLogo} className="multiLogo d-block mx-auto"/>
            <p className="text-center">COMPANY</p>
          </div>    
        </div>

      </div>
    )
  }
}

export default Presentaion