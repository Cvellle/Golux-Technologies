import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import goluxWhite from '../images/goluxWhite.png';
import './css/App.css'
import './css/home.css'

class Join extends React.Component {

  render() {

    return (
      <div>

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

export default Join