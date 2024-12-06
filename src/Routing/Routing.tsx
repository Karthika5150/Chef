// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../Home/Home";
// import Professional from "../Professional/Professional";
// import FoodCategory from "../FoodCategory/FoodCategory";
// // import FoodCategory from "../FoodCategory/Demo";
// import About from "../About/About";
// import Contact from "../Contact/Contact";
// import Login from "../Login/Login";
// import Navs from "../Navbar/Nav";
// import Footer from "../Footer/Footer";
// import ScrollToTop from "../Home/ScroolTop";
// import Signin from "../Login/Signup";



// const Routing = () => {

//     const [isAuthenticated, setIsAuthenticated] = useState(false);
    
//     return (
//         <>
//             <BrowserRouter>
//                 <ScrollToTop />
//                 <Navs />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/professional" element={<Professional />} />
//                     <Route path="/food-category" element={<FoodCategory />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/signin" element={<Signin />} />
//                 </Routes>
//                 <Footer />
//             </BrowserRouter>
//         </>
//     )
// }

// export default Routing;



import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Professional from "../Professional/Professional";
import FoodCategory from "../FoodCategory/FoodCategory";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Navs from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import ScrollToTop from "../Home/ScroolTop";
import Signin from "../Login/Signup";

const Routing = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navs />
            <Routes>
                {/* Protect the Home route */}
                <Route
                    path="/"
                    element={
                        isAuthenticated ? (
                            <Home />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/professional" element={<Professional />} />
                <Route path="/food-category" element={<FoodCategory />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/login"
                    element={<Login setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route
                    path="/signin"
                    element={<Signin setIsAuthenticated={setIsAuthenticated} />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Routing;
