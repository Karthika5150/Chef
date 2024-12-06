// import Container from 'react-bootstrap/Container';
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navs = () => {
//     return (
//         <>
//             <section className='section'>
//                 <Container>
//                     <div className='nav-contain'>
//                         <div className='nav-content'>
//                             <div>
//                                 <div className='logo-div'>
//                                     <img src='/assets/logo.png' className='img-fluid' alt="img" />
//                                 </div>
//                             </div>
//                             <div className='nav-center'>
//                                 <Link to="/" className='link'>
//                                     <p className='nav-txt'>Home</p>
//                                 </Link>

//                                 <Link to="/food-category" className='link'>
//                                     <p className='nav-txt'>FoodCategory</p>
//                                 </Link>
//                                 <Link to="/professional" className='link'>
//                                     <p className='nav-txt'>Otherprofessionals</p>
//                                 </Link>
//                                 <Link to="/about" className='link'>
//                                     <p className='nav-txt'>About</p>
//                                 </Link>
//                                 <Link to="/contact" className='link'>
//                                     <p className='nav-txt'>Contact</p>
//                                 </Link>
//                             </div>
//                             <div className=''>
//                                 <div className='nav-left'>
//                                     <p className='nav-txt-1'>
//                                         <i className="fi fi-br-search icon"></i>
//                                     </p>
//                                     <p className='nav-txt-1'>
//                                         <i className="fi fi-rr-circle-user icon"></i>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Container>
//             </section>
//         </>
//     );
// }

// export default Navs;






import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [open, Setopen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        navigate(`/food-category`, { state: { query: query.trim() || '' } });
    };

    useEffect(() => {
        if (location.pathname === '/') {
            setSearchQuery('');
        }
    }, [location.pathname]);


    return (
        <section className='section'>
            <Container>
                <div className='nav-contain'>
                    <div className='nav-content'>
                        <div>
                            <div className='logo-div'>
                                <Link to='/' className='link'>
                                    <img src='/assets/logo.png' className='img-fluid' alt="img" />
                                </Link>
                            </div>
                        </div>

                        {/* mobile design */}
                        <div className="d-lg-none mobile-div">
                            {/* Menu Icon */}
                            <div
                                className="menu-div"
                                onClick={() => {
                                    Setopen(!open);
                                }}
                            >
                                <i className="fi fi-rr-menu-burger menu"></i>
                            </div>

                            {/* Mobile Menu */}
                            <div className={open ? "right-div-1" : "hide"}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'link active-nav-txt' : 'link'
                                    }
                                    onClick={() => Setopen(false)} // Close menu on click
                                >
                                    <p className="nav-txt">Home</p>
                                </NavLink>
                                <NavLink
                                    to="/food-category"
                                    className={({ isActive }) =>
                                        isActive ? 'link active-nav-txt' : 'link'
                                    }
                                    onClick={() => Setopen(false)} // Close menu on click
                                >
                                    <p className="nav-txt">Receipe's</p>
                                </NavLink>
                                <NavLink
                                    to="/professional"
                                    className={({ isActive }) =>
                                        isActive ? 'link active-nav-txt' : 'link'
                                    }
                                    onClick={() => Setopen(false)} // Close menu on click
                                >
                                    <p className="nav-txt">Video's</p>
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? 'link active-nav-txt' : 'link'
                                    }
                                    onClick={() => Setopen(false)} // Close menu on click
                                >
                                    <p className="nav-txt">About</p>
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? 'link active-nav-txt' : 'link'
                                    }
                                    onClick={() => Setopen(false)} // Close menu on click
                                >
                                    <p className="nav-txt">Contact</p>
                                </NavLink>

                                <div>
                                    <Input
                                        placeholder="Idly"
                                        className="input-search"
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        suffix={<i className="fi fi-br-search icon"></i>}
                                    />
                                </div>

                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? 'link active-nav-txt' : 'link'
                                    }
                                    onClick={() => Setopen(false)} // Close menu on click
                                >
                                    <p className="nav-txt">
                                        <i className="fi fi-rr-user user-icon"></i>
                                    </p>
                                </NavLink>
                            </div>
                        </div>

                        {/* laptop design */}

                        <div className='nav-center'>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }>
                                <p className='nav-txt'>Home</p>
                            </NavLink>
                            <NavLink to="/food-category" className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }>
                                <p className='nav-txt'>Receipe's</p>
                            </NavLink>
                            <NavLink to="/professional" className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }>
                                <p className='nav-txt'>Video's</p>
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }>
                                <p className='nav-txt'>About</p>
                            </NavLink>
                            <NavLink to="/contact" className={({ isActive }) =>
                                isActive ? 'link active-nav-txt' : 'link'
                            }>
                                <p className='nav-txt'>Contact</p>
                            </NavLink>
                        </div>
                        <div>
                            <div className="nav-left">
                                <Input
                                    placeholder="Idly"
                                    className="input-search"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    suffix={<i className="fi fi-br-search icon icon-s"></i>}
                                />
                                <p className="nav-txt-1">
                                    <Link to='/login' className='link'>
                                        <i className="fi fi-rr-circle-user icon"></i>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Navs;

