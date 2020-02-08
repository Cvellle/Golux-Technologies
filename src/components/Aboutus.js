import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import play1 from '../images/play1.png';
import play2 from '../images/play2.png';
import video from '../images/video.png';
import logo from '../images/logo.png';
import './css/App.css'
import './css/home.css'

class Aboutus extends React.Component {

  render() {
      
    return (
      <div>
         <div className="aboutus">
            <h2 className="text-center">
              We are <img src={logo} className="weareLogo"/>
            </h2>
            <div className="d-sm-flex justify-content-sm-between">
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
      </div>
    )
  }
}

export default Aboutus