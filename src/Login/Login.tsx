import { Checkbox, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// Define props type
interface LoginProps {
    setIsAuthenticated: (value: boolean) => void;
}


const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const [Name, SetName] = useState("");
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Errors, setErrors] = useState<{ Email?: string; Password?: string }>({});
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const handleLogin = () => {
        // Perform login logic here
        setIsAuthenticated(true);
        navigate("/"); // Redirect to the home page after login
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetPassword(e.target.value);
    };

    const validateForm = () => {
        let formErrors: { Name?: string; Email?: string; Password?: string } = {};
        let isValid = true;

        if (!Email) {
            formErrors.Email = "Email is a required field.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(Email)) {
            formErrors.Email = "Email is not valid.";
            isValid = false;
        }

        if (!Password) {
            formErrors.Password = "Password is a required field.";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const HandleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", { Email, Password });

            const { token } = response.data;
            localStorage.setItem("authToken", token);

            // Show the popup message
            setShowPopup(true);

            // Set authentication and navigate after a delay
            setTimeout(() => {
                setIsAuthenticated(true);
                navigate("/");
            }, 5000); // Delay for 3 seconds
            // Reset form fields after submission
            SetEmail("");
            SetPassword("");
            setErrors({});

        } catch (err: any) {
            alert(err.response?.data?.message || "Sign-in failed.");
        }
    };

    return (
        <>
            <section className="login-bg">
                <Container>
                    <div className="d-flex justify-content-center pt-lg-5">
                        <div className="login-form-contain">
                            <h2 className="head-txt text-center pt-lg-5">Login</h2>

                            <div>
                                <label className="label">
                                    Email
                                </label>
                                <Input className="input-ctn"
                                    id="email"
                                    value={Email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter Your Email"
                                    suffix={<i className="fi fi-rr-envelope f-icon"></i>} />

                                {Errors.Email && <div className="error">{Errors.Email}</div>}

                                <label className="label">
                                    Password
                                </label>

                                <Input className="input-ctn" id="password"
                                    value={Password}
                                    onChange={handlePasswordChange} placeholder="*************" suffix={<i className="fi fi-rr-lock f-icon"></i>} />

                                {Errors.Password && <div className="error">{Errors.Password}</div>}

                                <div className="d-flex justify-content-between">
                                    <div className="d-flex gap-2">
                                        <div>
                                            <input type="checkbox" className="checkbox" />
                                        </div>
                                        <p className="login-txt-1">Remember me</p>
                                    </div>
                                    <div className="login-txt-1"><span>Forgot Password?</span></div>
                                </div>

                                <div className="d-flex justify-content-center mt-1">
                                    <Button className="btn-3" onClick={HandleSubmit}>
                                        Login
                                    </Button>
                                </div>

                                <div className="text-center">
                                    <Link to="/signin" className="link">
                                        <p className="login-txt-2">Signin</p>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Popup Modal */}
            <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
                <Modal.Body className="text-center modal-design">
                    <h2 className="head-txt">Login Successful!</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="gif-div">
                            <img src="/assets/welcome.png.gif" className="img-fluid" alt="gif" />
                        </div>
                    </div>
                    <p className="mt-3 para-txt">Redirecting you to the HomePage...</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login;