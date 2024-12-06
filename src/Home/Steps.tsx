import React from 'react'
import { Container } from 'react-bootstrap';

const Steps = () => {
    return (
        <section className='section-home-1'>
            <Container>
                <div>
                    <h2 className='head-txt'>Follow These 3 Easy Steps to Cook Your Recipe!</h2>
                    <div className='row pt-5 row-flx-div'>
                        <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                            <div>
                                <div className='step-div'>
                                    <p className='opa-div'>
                                        <i className="fi fi-rr-user-pen"></i>
                                        <p className='opacity-p'></p>
                                    </p>
                                    <p className='setp-div-content'>Log in to your account to start.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                            <div>
                                <div className='step-div'>
                                    <p className='opa-div'><i className="fi fi-rr-search"></i>
                                        <p className='opacity-p'></p>
                                    </p>
                                    <p className='setp-div-content'>Search for recipes and ingredients.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                            <div>
                                <div className='step-div'>
                                    <p className='opa-div'>
                                        <i className="fi fi-rr-mix"></i>
                                        <p className='opacity-p'></p></p>
                                    <p className='setp-div-content'>Follow steps to cook your dish.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Steps;
