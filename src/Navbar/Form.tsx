import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
    // State to store email, password, and errors
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    // Handle input changes
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // Form validation logic
    const validateForm = () => {
        let formErrors: { email?: string; password?: string } = {};
        let isValid = true;

        // Email validation (check if email is valid format)
        if (!email) {
            formErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is not valid.";
            isValid = false;
        }

        // Password validation (check if password is not empty)
        if (!password) {
            formErrors.password = "Password is required.";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    // Handle button click
    const handleSubmit = async () => {
        if (!validateForm()) {
            return; // Stop if the form is not valid
        }

        try {
            // Simulate a login request
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos/1', { email, password });
            const { token } = response.data;

            // Store the token in localStorage
            localStorage.setItem("authToken", token);
            alert("Login successful!");
        } catch (err: any) {
            // Handle error if login fails (showing server error message)
            alert(err.response?.data?.message || "Login failed!");
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>

                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
};

export default LoginForm;
