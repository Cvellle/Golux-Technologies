import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png';
import profileBlue from '../images/profileBlue.svg';
import hamb from '../images/hamb.svg';

import './css/header.css'

class Header extends React.Component {

  render() {

    return (
      <header className="App-header d-flex justify-content-between">
        <NavLink replace={true} to="/" className="logoLink">{' '}
          <img src={logo}/>        
        </NavLink>
        <div className="navRight d-block align-self-center">
          <NavLink to="/">
          <button className="d-none d-sm-inline-block" onClick={this.props.prepareScroll}>GET QUOTE</button>
          </NavLink>
          <img className="my-auto"src={profileBlue}/>
          <img className="hamburger"src={hamb}/>
        </div>
      </header>
    )
  }
}

export default Header