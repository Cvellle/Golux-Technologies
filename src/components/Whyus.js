import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import './css/home.css'

class Whyus extends React.Component {

  render() {
      
    return (
        <div>
            <div className="whyus">
            <h3 className="text-center">Why us?</h3>   
            <p className="text-center">
                We are developing software for clients in 20 countries.
            </p>           
            <div className="dashDiv text-center">
                <a href="">Company</a>
                <div className="dash"></div>
            </div>
            </div>
        </div>
        )
    }
}

export default Whyus