import React, { useState } from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProfileSettings from "./Components/ProfileSettings";
import { getCurrentUser, logoutUser } from "./services/authService";
import "./App.css";

function App() {
    const [screen, setScreen] = useState(() => (getCurrentUser() ? "profile" : "login"));
    const [currentUser, setCurrentUser] = useState(() => getCurrentUser());

    const handleLoginSuccess = (user) => {
        setCurrentUser(user);
        setScreen("profile");
    };

    const handleSignUpSuccess = () => {
        setScreen("login");
    };

    const handleLogout = () => {
        logoutUser();
        setCurrentUser(null);
        setScreen("login");
    };

    if (screen === "signup") {
        return <SignUp onSwitchToLogin={() => setScreen("login")} onSignUpSuccess={handleSignUpSuccess} />;
    }

    if (screen === "profile") {
        return <ProfileSettings user={currentUser} onLogout={handleLogout} />;
    }

    return (
        <Login
            onSwitchToSignUp={() => setScreen("signup")}
            onLoginSuccess={handleLoginSuccess}
        />
    );
}

export default App;