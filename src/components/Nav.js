import React from 'react';
import { Link } from "react-router-dom"
import { Container, } from "reactstrap"
import "../styles/navbar.css"
function Nav() {
    return (
        <>
            <header className='header_top'>
                <Container>
                    <nav className='navbar navbar-expand-lg navbar-light '>
                        <div className='container-fluid'>
                            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span className='navbar-toggler-icon'></span>
                            </button>

                            <Link className='navbar-brand' to="/"><img src="/img/logo.svg" alt="" /></Link>
                            <div className=' collapse navbar-collapse  ' id="navbarTogglerDemo03">

                                <ul className='nav-i navbar-nav  me-auto mb-2 mb-lg-0 '>
                                    <li class="nav-item">
                                        <Link className='nav-link active' aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className='nav-link ' aria-current="page" to="/properties">Properties </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className='nav-link ' aria-current="page" to="/about">About us</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className='nav-link ' aria-current="page" to="/blog">Blog</Link>
                                    </li>
                                </ul>
                                <Link className='a-btn ' to="/contact" tabindex="-1" aria-disabled="true">Contact us</Link>

                            </div>


                        </div>
                    </nav>
                </Container>
            </header>
        </>
    );
}

export default Nav;
