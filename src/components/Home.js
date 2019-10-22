import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Lab from './Lab'
import Play from './Play'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Whyus from './Whyus'
import Clients from './Clients'
import Subscribe from './Subscribe'
import Join from './Join'
import mainImg from '../images/mainImg.png';
import './css/App.css'
import './css/home.css'

class Home extends React.Component {
  componentDidMount() {
    this.refs.main.scrollIntoView({behavior: 'smooth'})
  }

  scrollup() {
    // ref.scrollIntoView({behavior: 'smooth'}) 
  }

  render() {
    // let { props, ref } = React.forwardRef((props, ref) => ({ props, ref }));
    // ref={ref}
    return (
      <div>
        <div className="mainscreen">
          <img src={mainImg} className="d-block d-sm-none mx-auto"/>
          <div className="mainblock position-relative">
            <div className="d-sm-flex justify-content-sm-between" >
              <div className="col-xs-12 col-sm-6 text-left align-self-center p-0"> 
                <h1 className="align-self-center d-block">
                  A luxury fashion brand
                  for Digital Presence!
                </h1>
                <p className="align-self-center mainDescr">
                  Golux technologies creates the product you desire
                  with cutting edge technology and following the
                  latest trends in design and user experience
                </p>
              </div>
              <img src={mainImg} className="col-xs-12 d-none d-sm-flex justify-content-end"/>
            </div>  
            <Link to="/presentation">        
              <button className="d-none d-sm-block mainBlockBtn justify-content-start">
                LEARN MORE
              </button>
              <button className="d-block d-sm-none"  ref="main">
                LEARN MORE
              </button>
              </Link>
          </div>  
        </div>       
        <Lab/>
        <Play/>  
        <Aboutus/>
        <Contactus/>
        <Clients/>
        <Whyus/>
        <Subscribe/>
        <Join/>
      </div>
    )
  }
}

export default Home