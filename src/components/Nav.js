import React from 'react';
import { Link } from "react-router-dom"
import { } from "reactstrap"
function Nav() {
    return (
        <>
            <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
           
                        <Link to="/" className="logo"> Logo </Link>
                    
                        <ul className="nav">
                            <li className="scroll-to-section"><Link to="#top" className="active">Home</Link></li>
                            <li className="scroll-to-section"><Link to="#about">About</Link></li>
                  
                            <li className="scroll-to-section"><Link to="#menu">Menu</Link></li>
                            <li className="scroll-to-section"><Link to="#chefs">Chefs</Link></li> 
                            <li className="submenu">
                                <Link to="">Features</Link>
                                <ul>
                                    <li><Link to="#">Features Page 1</Link></li>
                                    <li><Link to="#">Features Page 2</Link></li>
                                    <li><Link to="#">Features Page 3</Link></li>
                                    <li><Link to="#">Features Page 4</Link></li>
                                </ul>
                            </li>
                           
                            <li className="scroll-to-section"><Link to="#reservation">Contact Us</Link></li> 
                        </ul>        
                        <Link className='menu-trigger' to="#!">
                            <span>Menu</span>
                        </Link>
              
                    </nav>
                </div>
            </div>
        </div>
    </header>
        </>
    );
}

export default Nav;
