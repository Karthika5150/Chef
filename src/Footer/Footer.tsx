import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='section-home-2'>
            <Container>
                <div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div>
                                <div className='logo-div-f'>
                                    <Link to='/' className='link'>
                                        <img src='/assets/logo.png' className='img-fluid' alt='img' /></Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='f-divs'>
                                <div>
                                    <Link to="/" className='link'>
                                        <p className='f-txt'>Home</p>
                                    </Link>
                                    <Link to="/food-category" className='link'>
                                        <p className='f-txt'>Receipes</p>
                                    </Link>
                                    <Link to="/professional" className='link'>
                                        <p className='f-txt'>Other Professional</p>
                                    </Link>
                                    <Link to="/about" className='link'>
                                        <p className='f-txt'>About</p>
                                    </Link>
                                    <Link to="/contact" className='link'>
                                        <p className='f-txt'>Contact</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div>
                                <div className='f-divs'>
                                    <div className='d-flex gap-3'>
                                        <p>
                                            <i className="fi fi-rr-envelope f-icon"></i>
                                        </p>

                                        <p className='f-txt-1'>
                                            Sample@gmail.com
                                        </p>
                                    </div>

                                    <div className='d-flex gap-3'>
                                        <p>
                                            <i className="fi fi-rr-phone-call f-icon"></i>
                                        </p>

                                        <p className='f-txt-1'>
                                            +91 12345 67890
                                        </p>
                                    </div>

                                    <div className='d-flex gap-3'>
                                        <p>
                                            <i className="fi fi-rr-marker f-icon"></i>
                                        </p>

                                        <p className='f-txt-1'>
                                            5/24,Vadapalani,Chennai
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div>
                                <div className='d-flex gap-3  f-divs'>
                                    <p>
                                        <i className="fi fi-brands-instagram  f-icon"></i>
                                    </p>
                                    <p>
                                        <i className="fi fi-brands-whatsapp f-icon"></i>
                                    </p>
                                    <p>
                                        <i className="fi fi-brands-facebook f-icon"></i>
                                    </p>
                                    <p>
                                        <i className="fi fi-brands-youtube f-icon"></i>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Footer;
