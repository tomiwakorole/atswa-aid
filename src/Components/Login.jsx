import React, { useState } from "react";
import { loginUser } from "../services/authService";
import "../Styles/Login.css";

function Login({ onSwitchToSignUp, onLoginSuccess }) {
    const [showPassword, setShowPassword] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setError("");

        const user = loginUser(identifier, password);

        if (!user) {
            setError("Incorrect email, username, or password. Create an account if you do not have one.");
            return;
        }

        if (onLoginSuccess) {
            onLoginSuccess(user);
        }
    };

    return (
        <div className="login-page">
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
                                <h2>Sign In</h2>
                                <span className="secure-badge">CBT SECURE 2.4</span>
                            </div>

                            <p className="card-copy">
                                Sign in with your student credentials to resume your study
                                ledger and CBT mock tests.
                            </p>

                            <form className="signin-form" onSubmit={handleSubmit}>
                                <div className="field-row">
                                    <label htmlFor="username">Email or Username</label>
                                    <span className="field-meta">ATS-Reg / Scholar ID</span>
                                </div>
                                <input
                                    id="username"
                                    type="text"
                                    value={identifier}
                                    onChange={(event) => setIdentifier(event.target.value)}
                                    placeholder="scholar@atswa.org or adeola_oladipo"
                                />

                                <div className="field-row">
                                    <label htmlFor="password">Password</label>
                                    <span className="field-meta">Case-sensitive</span>
                                </div>
                                <div className="password-wrap">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        placeholder="••••••••••••••••"
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

                                {error ? <p className="form-error">{error}</p> : null}

                                <div className="options-row">
                                    <label className="remember-box">
                                        <input type="checkbox" />
                                        <span>Remember me on this workstation</span>
                                    </label>
                                    <a href="#">Forgot Password?</a>
                                </div>

                                <button type="submit" className="signin-btn">
                                    Sign In to ATSWA AID <span>→</span>
                                </button>

                                <div className="account-row">
                                    <span>Don't have an account?</span>
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        if (onSwitchToSignUp) onSwitchToSignUp();
                                    }}>
                                        Create Account
                                    </a>
                                    <span className="divider">/</span>
                                    <a href="#" onClick={(e) => e.preventDefault()}>Register as</a>
                                </div>

                                <div className="account-row secondary">
                                    <a href="#">Candidate</a>
                                    <span className="divider">or</span>
                                    <a href="#">Practice as Guest</a>
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

export default Login;