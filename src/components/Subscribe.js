import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import openMail from '../images/openMail.png';
import './css/App.css'
import './css/home.css'

class Subscribe extends React.Component {

  render() {

    return (
      <div>

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
        
      </div>
    )
  }
}

export default Subscribe