import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Play from './Play'
import lab1 from '../images/lab1.png';
import yes from '../images/yes.svg';
import './css/App.css'
import './css/home.css'
import './css/work.css'

class Work extends React.Component {

  render() {
      
    return (
        <div>
            <div className="topDiv w-100"></div>
            <div className="">
                <div className="workMain">
                    <h2>What we do</h2>
                    <p className="descr">
                        <b>Sprcific info about digital presence here. </b>
                        Sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam
                        erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution
                        ullam corper suscipit lobortis nisi ut aliquip ex ea commodo consequat.
                        Duis te feugi facilisi. Duis autem dolor in hendrerit in vulputate velit 
                    </p>
                </div>

                <div className="case flex-wrapper">
                    <div>
                        <img src={lab1}/>
                        <h4 className="text-center">SERVICES</h4>
                    </div>
                    <div>
                        <img src={lab1}/>
                        <h4 className="text-center">CASE STUDIES</h4>
                    </div>
                    <div>
                        <img src={lab1}/>
                        <h4 className="text-center">PROJECTS</h4>
                    </div>
                </div>

                <div>
                    <Play/>
                </div>
                
                <div className="concepts">
                    <h3 className="text-center">Work concepts</h3>
                    <p className="descr text-center">
                        <b>Text about work concepts here. </b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diem nonummy
                        nibh euismod tincidunt ut lacreet dolore magna aliguam
                        erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution
                        ullamcorper suscipit.
                    </p>
                </div>

                <div className="delivery">
                    <h3 className="text-center">Delivery process</h3>
                    <div className="case flex-wrapper">
                        <div>
                            <img src={lab1}/>
                        </div>
                        <div>
                            <img src={yes}/>
                        </div>
                        <div>
                            <img src={lab1}/>
                        </div>
                        <div>
                            <img src={yes}/>
                        </div>
                        <div>
                            <img src={lab1}/>
                        </div>
                        <div>
                            <img src={yes}/>
                        </div>
                        <div>
                            <img src={lab1}/>
                        </div>
                    </div>
                    <p className="descr text-center">
                        <b>Text about delivery process here. </b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diem nonummy
                        nibh euismod tincidunt ut lacreet dolore magna aliguam
                        erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution
                        ullamcorper suscipit.
                    </p>
                </div>

            </div>
        </div>    
        )
    }
}

export default Work