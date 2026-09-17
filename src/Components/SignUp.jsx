import React, { useState } from "react";
import { createAccount } from "../services/authService";
import "../Styles/SignUp.css";

function SignUp({ onSwitchToLogin, onSignUpSuccess }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        const { fullName, email, username, password, confirmPassword } = form;

        if (!fullName || !email || !username || !password || !confirmPassword) {
            setError("Please fill in all required fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        try {
            const user = createAccount({
                fullName,
                email,
                username,
                password,
            });

            setSuccess(`Account created successfully. Your Student ID is ${user.studentId}.`);

            if (onSignUpSuccess) {
                setTimeout(() => onSignUpSuccess(), 1200);
            }
        } catch (submitError) {
            setError(submitError.message || "Unable to create account right now.");
        }
    };

    return (
        <div className="signup-page">
            <div className="signin-shell">
                <div className="login-layout">
                    <div className="login-content">
                        <div className="portal-brand">
                            <div className="brand-mark">A</div>
                            <div className="brand-tag">ATSWA AID PORTAL</div>
                        </div>

                        <h1 className="portal-title">
                            Your learning companion for ATS 1 &amp; ATS
                            <span>2</span>
                        </h1>

                        <p className="portal-subtitle">
                            Accounting Technicians Scheme of West Africa Examination
                            <br />
                            Preparation Portal
                        </p>

                        <div className="signin-card">
                            <div className="card-head">
                                <h2>Create Account</h2>
                                <span className="secure-badge">STUDENT REGISTRATION</span>
                            </div>

                            <p className="card-copy">
                                Join ATSWA AID to access your study tracker, practice tests,
                                and exam preparation materials.
                            </p>

                            <form className="signin-form" onSubmit={handleSubmit}>
                                <div className="field-row">
                                    <label htmlFor="fullName">Full Name</label>
                                    <span className="field-meta">As on registration</span>
                                </div>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="Adeola Oladipo"
                                />

                                <div className="field-row">
                                    <label htmlFor="studentEmail">Email Address</label>
                                    <span className="field-meta">Personal email</span>
                                </div>
                                <input
                                    id="studentEmail"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="student@atswa.org"
                                />

                                <div className="field-row">
                                    <label htmlFor="studentUsername">Username</label>
                                    <span className="field-meta">Unique username</span>
                                </div>
                                <input
                                    id="studentUsername"
                                    name="username"
                                    type="text"
                                    value={form.username}
                                    onChange={handleChange}
                                    placeholder="adeola_oladipo"
                                />

                                <div className="field-row">
                                    <label htmlFor="createPassword">Password</label>
                                    <span className="field-meta">Case-sensitive</span>
                                </div>
                                <div className="password-wrap">
                                    <input
                                        id="createPassword"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Create a strong password"
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {showPassword ? "🙈" : "👁"}
                                    </button>
                                </div>

                                <div className="field-row">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <span className="field-meta">Repeat password</span>
                                </div>
                                <div className="password-wrap">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Re-enter password"
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    >
                                        {showConfirmPassword ? "🙈" : "👁"}
                                    </button>
                                </div>

                                {error ? <p className="form-error">{error}</p> : null}
                                {success ? <p className="form-success">{success}</p> : null}

                                <div className="options-row account-option-row">
                                    <label className="remember-box">
                                        <input type="checkbox" />
                                        <span>I agree to the terms and policies</span>
                                    </label>
                                </div>

                                <button type="submit" className="signin-btn">
                                    Create Account <span>→</span>
                                </button>

                                <div className="account-row">
                                    <span>Already have an account?</span>
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        if (onSwitchToLogin) onSwitchToLogin();
                                    }}>
                                        Sign In
                                    </a>
                                </div>

                                <button type="button" className="demo-btn">
                                    Explore Sample Questions (Quick Demo)
                                </button>
                            </form>
                        </div>

                        <div className="footer-note">
                            <span className="note-icon">✓</span>
                            <p>
                                Accredited syllabus matching ABWA / ICAN guidelines
                                <br />
                                for ATS 1 &amp; ATS 2
                            </p>
                        </div>
                    </div>

                    <aside className="portal-logo-panel" aria-label="ATSWA portal branding">
                        <div className="portal-logo">
                            <div className="logo-mark">A</div>
                        </div>
                        <div className="logo-copy">
                            <span className="logo-tag">ATSWA AID</span>
                            <strong>Portal</strong>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
