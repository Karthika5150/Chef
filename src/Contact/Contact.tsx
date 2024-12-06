import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";


const Contact = () => {
    const [Name, SetName] = useState("");
    const [Email, SetEmail] = useState("");
    const [PhoneNo, SetPhoneNo] = useState("");
    const [Receipe, SetReceipe] = useState("");
    const [Message, SetMessage] = useState("");
    const [Errors, setErrors] = useState<{ Name?: string; Email?: string; PhoneNo?: string; Receipe?: string; Message?: string }>({});

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetEmail(e.target.value);
    };

    const handlePhoneNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetPhoneNo(e.target.value);
    };

    const handleReceipeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetReceipe(e.target.value);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        SetMessage(e.target.value);
    };

    const validateForm = () => {
        let formErrors: { Name?: string; Email?: string; PhoneNo?: string; Receipe?: string; Message?: string } = {};
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

        if (!PhoneNo) {
            formErrors.PhoneNo = "PhoneNo is a required field.";
            isValid = false;
        }

        if (!Receipe) {
            formErrors.Receipe = "Receipe is a required field.";
            isValid = false;
        }

        if (!Message) {
            formErrors.Message = "Message is a required field.";
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
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", { Name, Email, PhoneNo, Receipe, Message });

            const { token } = response.data;
            localStorage.setItem("authToken", token);
            // Construct the WhatsApp message
            const message = `Hi Admin,\n\nI'm ${Name},\nI want a recipe for ${Receipe}. You can reach me at ${PhoneNo}. \nMessage: ${Message}`;

            const adminPhoneNumber = '+918903226495'; // Example for an Indian phone number

            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;

            // Redirect the user to the WhatsApp chat window,_blank means to open new tab to show that whatsapp 
            window.open(whatsappURL, '_blank');

            // Reset form fields after submission
            SetName("");
            SetEmail("");
            SetPhoneNo("");
            SetReceipe("");
            SetMessage("");
            setErrors({});


        } catch (err: any) {
            alert(err.response?.data?.message || "Sign-in failed.");
        }
    };
    return (
        <>
            <section className="img-contact">
                <div className="d-flex justify-content-end">
                    <div className="contact-content">
                        <h2 className="head-txt-2">We’re Here to Help—Reach Out for Recipe Queries or Tips!</h2>
                    </div>
                </div>
            </section>
            <section className="form-bg">
                <div className="pt-3">
                    <Container>
                        <div>
                            <h2 className="head-txt text-center">Got a Recipe Request? Let Us Know!</h2>
                            <div className="d-flex justify-content-center pt-4">
                                <div className="form-ctn">
                                    <label className="label">Name</label>
                                    <Input placeholder="Enter Your Name" id="name" onChange={handleNameChange} value={Name} className="input-ctn" />
                                    {Errors.Name && <div className="error">{Errors.Name}</div>}

                                    <label className="label">Email</label>
                                    <Input placeholder="Enter Your Email" id="email" onChange={handleEmailChange} value={Email} className="input-ctn" />
                                    {Errors.Email && <div className="error">{Errors.Email}</div>}

                                    <label className="label">Phone No</label>
                                    <Input placeholder="Enter Your Phone No" id="phoneno" onChange={handlePhoneNoChange} value={PhoneNo} className="input-ctn" />
                                    {Errors.PhoneNo && <div className="error">{Errors.PhoneNo}</div>}

                                    <label className="label">Receipe Name</label>
                                    <Input placeholder="Enter Your Receipe Name" id="receipe" onChange={handleReceipeChange} value={Receipe} className="input-ctn" />
                                    {Errors.Receipe && <div className="error">{Errors.Receipe}</div>}

                                    <label className="label">Message</label>
                                    <TextArea id="message" value={Message} placeholder="Message" onChange={handleMessageChange} className="input-ctn" />
                                    {Errors.Message && <div className="error">{Errors.Message}</div>}

                                    <div className="d-flex justify-content-center pt-3">
                                        <Button className="btn-3" onClick={HandleSubmit}>Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Contact;