// 
import { Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

interface SignUpPageProps {
    setIsAuthenticated: (value: boolean) => void;
}

const Signin: React.FC<SignUpPageProps> = ({ setIsAuthenticated }) => {
    const [Name, SetName] = useState("");
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Errors, setErrors] = useState<{ Name?: string; Email?: string; Password?: string }>({});
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const navigate = useNavigate();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetName(e.target.value);
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

        if (!Name) {
            formErrors.Name = "Name is a required field.";
            isValid = false;
        }

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
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", { Name, Email, Password });

            const { token } = response.data;
            localStorage.setItem("authToken", token);

            // Show the popup message
            setShowPopup(true);

            // Set authentication and navigate after a delay
            setTimeout(() => {
                setIsAuthenticated(true);
                navigate("/login");
            }, 5000); // Delay for 3 seconds


                   // Reset form fields after submission
                   SetName("");
                   SetEmail("");
                   SetPassword("");
                   setErrors({});
        } catch (err: any) {
            alert(err.response?.data?.message || "Sign-in failed.");
        }
    };

    return (
        <>
            <section className="signin-bg">
                <Container>
                    <div className="d-flex justify-content-center pt-lg-5">
                        <div className="login-form-contain">
                            <h2 className="head-txt text-center pt-lg-2">Sign in</h2>
                            <div>
                                <label className="label">Name</label>
                                <Input
                                    className="input-ctn"
                                    id="name"
                                    value={Name}
                                    onChange={handleNameChange}
                                    placeholder="Enter Your Name"
                                />
                                {Errors.Name && <div className="error">{Errors.Name}</div>}

                                <label className="label">Email</label>
                                <Input
                                    className="input-ctn"
                                    id="email"
                                    value={Email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter Your Email"
                                />
                                {Errors.Email && <div className="error">{Errors.Email}</div>}

                                <label className="label">Password</label>
                                <Input
                                    className="input-ctn"
                                    id="password"
                                    value={Password}
                                    onChange={handlePasswordChange}
                                    placeholder="***************"
                                />
                                {Errors.Password && <div className="error">{Errors.Password}</div>}

                                <div className="d-flex justify-content-center">
                                    <div className="login-txt-1">
                                        Already have an account?{" "}
                                        <Link to="/login" className="link">
                                            <span>Login</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    <Button className="btn-3" onClick={HandleSubmit}>
                                        Sign in
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Popup Modal */}
            <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
                <Modal.Body className="text-center">
                    <h2 className="head-txt">Signin Successful!</h2>

                    <div className="d-flex justify-content-center align-items-center">
                        <div className="gif-div">
                            <img src="/assets/welcome.png.gif" className="img-fluid" alt="gif" />
                        </div>
                    </div>
                    <p className="mt-3 para-txt">Redirecting you to the LoginPage...</p>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Signin;
