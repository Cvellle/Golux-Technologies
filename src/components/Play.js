import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import play1 from '../images/play1.png';
import play2 from '../images/play2.png';
import './css/App.css'
import './css/home.css'

class Play extends React.Component {

  render() {

    return (
      <div>
        <div className="play">
            <h2 className="text-center">Choose your play</h2>
            <div class="d-sm-flex justify-content-sm-between">
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
      </div>
    )
  }
}

export default Play