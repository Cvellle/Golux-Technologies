import React from 'react'
import { NavLink } from 'react-router-dom'
import multiLogo from '../images/multiLogo.png';
import logo from '../images/logo.png';
import profileBlue from '../images/profileBlue.svg';
import hamb from '../images/hamb.svg';
import './css/presentation.css'

class Presentaion extends React.Component {

  render() {

    return (
      <div className="presentaion">

        <div className="logoDiv">
          <div className="">
            <img src={multiLogo}/>
            <img src={logo}/>
          </div>
          <div className="">
            Specific info about company, values and philosophy.
            Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis 
          </div>
        </div>
        
      </div>
    )
  }
}

export default Presentaion