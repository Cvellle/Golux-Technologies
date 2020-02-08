import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import './css/home.css'

class Whyus extends React.Component {

    moveLeft() {
        this.refs.company.style="transform: translatex(30%);"
        this.refs.greenBg.style="transform: translatex(-30%);" 
    }

    moveRight() {
        this.refs.company.style="transform: translatex(0%);"
        this.refs.greenBg.style="transform: translatex(0%);" 
    }

    render() {
        
        return (
            <div>
                <div className="whyus">
                    <h3 className="text-center">Why us?</h3>   
                    <p className="text-center">
                        We are developing software for clients in 20 countries.
                    </p>
                    <div className="greenBgDiv text-center">
                        <div href="#" className="company d-flex mx-auto justify-content-center" role="button">
                            <Link to="/our-work" style={{ textDecoration: 'none'}} onMouseOver={this.moveLeft.bind(this)} onMouseOut={this.moveRight.bind(this)}>
                                <p ref="company">
                                    Company
                                    <div className="greenBg" ref="greenBg"></div>
                                </p>
                            </Link>
                            
                        </div>
                    </div>           
                </div>
            </div>
            )
        }
    }

export default Whyus