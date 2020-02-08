import React from 'react'
import './css/footer.css'
import logo from '../images/logo.png';
import arrowup from '../images/arrowup.svg';
import gFooter from '../images/gFooter.svg';
import mailFooter from '../images/mailFooter.svg';
import mob from '../images/mob.svg';
import insta from '../images/insta.svg';

class Footer extends React.Component {

    scrollup = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    render() {  
        return (
            <footer className="footer">
                <div className="d-sm-flex justify-content-sm-between">
                    <div className="">
                        <img src={logo} className="logo"/>
                    </div>
                    <div className="">
                        <img src={arrowup} className="d-none d-sm-flex arrowup float-right" onClick={this.scrollup}/>    
                    </div>
                </div>
                
                <div className="footerContent d-sm-flex justify-content-sm-between mx-auto">

                    <div className="col-sm-3 mx-auto justify-content-center firstColumn">
                        <p className="text-left mx-auto footerDescr">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-left mx-auto blueContact1">office@glux.com</p>
                        <p className="text-left mx-auto blueContact2">+381 64 397 4918</p>
                        <p className="text-left mx-auto adress">BELGRADE SERBIA</p>
                        <p className="text-left mx-auto">Bulevar Mihaila Pupina 422/5</p>
                    </div>

                    <div className="col-sm-4 mx-auto footerLinks">
                        <div className="d-sm-inline-block footerLinks1">
                            <p className="text-center text-sm-left mx-auto">Home</p>
                            <p className="text-center text-sm-left mx-auto">What we do</p>
                            <p className="text-center text-sm-left mx-auto">About</p>
                            <p className="text-center text-sm-left mx-auto">Blog</p>
                            <p className="text-center text-sm-left mx-auto">Careers</p>
                            <p className="text-center text-sm-left mx-auto">Contact</p>
                        </div>
                        <div className="d-sm-inline-block footerLinks2">
                            <p className="text-center text-sm-left mx-auto">Backend development</p>
                            <p className="text-center text-sm-left mx-auto">Frontend development</p>
                            <p className="text-center text-sm-left mx-auto">Mobile development</p>
                            <p className="text-center text-sm-left mx-auto">Web design</p>
                            <p className="text-center text-sm-left mx-auto">Marketing & SEO</p>
                            <p className="text-center text-sm-left mx-auto">Business consulting</p>                                        
                        </div>
                    </div>

                    <div className="mx-auto footerButtons mx-auto mr-sm-0">
                        <p className="text-left">
                            <img src={gFooter}/>
                            Golux club
                        </p>
                        <div className="col-12 d-sm-flex justify-content-sm-between pr-sm-0">
                            <button className="d-block d-sm-inlin-block max-auto float-sm-left half">VIEW</button>
                            <button className="d-block d-sm-inlin-block max-auto float-sm-right half">JOIN</button>
                        </div>
                        <p className="text-left mx-auto">
                            <img src={mob} className="mob"/>
                            Get quote
                        </p>
                        <div className="col-12 mx-auto pr-sm-0">
                            <button className="col-sm-12 mx-auto">BOOK A CALL</button>
                        </div>
                        <p className="text-left mx-auto">
                            <img src={mailFooter}/>
                            Newsletter
                        </p>
                        <div className="subscrFooter col-12 d-sm-flex justify-content-sm-between pr-sm-0">
                            <input className="" placeholder="E-mail here"/>
                            <button className="d-flex">SUBSCRIBE</button>
                        </div>
                    </div>

                </div>

                <div className="row underFooter col-12">
                    <div className="d-none d-sm-block col-5 mx-auto my-auto">
                        @ Golux Technologies- powered by Golux group
                    </div>
                    <div className="col-sm-2 mx-auto social text-center">
                        <i className="d-inline-block fa fa-instagram text-center"></i>
                        <i className="d-inline-block fa fa-linkedin text-center"></i>
                    </div>
                    <div className="col-5 d-none d-sm-block col-4 mx-auto text-right my-auto">
                        <div className="">
                            <span>Privacy policy</span>
                            <span>Terms and conditions</span>
                        </div>
                    </div> 
                </div>
                <div className="d-inline-block d-sm-none col-12 col-sm-4 mx-auto privacy">
                    <span className="d-inline-block float-left">Privacy policy</span>
                    <span className="d-inline-block float-right">Terms and conditions</span>
                </div>
                <div className="copyright d-block d-sm-none col-sm-6 col-sm4 mx-auto">
                    @ Golux Technologies- powered by Golux group
                </div> 

            </footer>
        )
    }
}

export default (Footer)