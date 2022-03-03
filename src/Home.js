import React from "react";
import {  } from "react-router-dom";
import { Container, } from "reactstrap"
import "./styles/style.css"
function Home() {
    return (
        <>
            <header className="Header-home">
                <Container>
                    <div className="row justify-content-between mt-4">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Find the perfect place to stay with your family</h1>
                                </div>
                                <div className="col-12">
                                    <p>Buying a home is a life-changing experience, so shouldn’t your real estate agent be a life changer.</p>
                                </div>
                                <div className="col-12">

                                    <div className="navrelatev">
                                    <div className="navtabs">
                                   
                                        <div className="searchtabs">

                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <img className="buld" src="/img/build.svg" alt="" />
                        </div>
                    </div>
                </Container>
            </header>

        </>
    )
}

export default Home