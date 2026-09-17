import React, { useState } from "react";
import "../Styles/SignUp.css";

function SignUp({ onSwitchToLogin }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="signup-page">
            <div className="signin-shell">
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

                    <form className="signin-form">
                        <div className="field-row">
                            <label htmlFor="fullName">Full Name</label>
                            <span className="field-meta">As on registration</span>
                        </div>
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Adeola Oladipo"
                        />

                        <div className="field-row">
                            <label htmlFor="studentEmail">Email Address</label>
                            <span className="field-meta">Personal email</span>
                        </div>
                        <input
                            id="studentEmail"
                            type="email"
                            placeholder="student@atswa.org"
                        />

                        <div className="field-row">
                            <label htmlFor="studentId">Student ID / Scholar ID</label>
                            <span className="field-meta">Optional</span>
                        </div>
                        <input
                            id="studentId"
                            type="text"
                            placeholder="ATS-REG / scholar ID"
                        />

                        <div className="field-row">
                            <label htmlFor="createPassword">Password</label>
                            <span className="field-meta">Case-sensitive</span>
                        </div>
                        <div className="password-wrap">
                            <input
                                id="createPassword"
                                type={showPassword ? "text" : "password"}
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
                                type={showConfirmPassword ? "text" : "password"}
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
        </div>
    );
}

export default SignUp;
