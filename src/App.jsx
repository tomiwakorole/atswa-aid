import React, { useState } from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import ProfileSettings from "./Components/ProfileSettings";
import { getCurrentUser, logoutUser } from "./services/authService";
import "./App.css";

function App() {
    const [screen, setScreen] = useState(() => (getCurrentUser() ? "dashboard" : "login"));
    const [currentUser, setCurrentUser] = useState(() => getCurrentUser());

    const handleLoginSuccess = (user) => {
        setCurrentUser(user);
        setScreen("dashboard");
    };

    const handleSignUpSuccess = () => {
        setScreen("login");
    };

    const handleNavigate = (nextScreen) => {
        if (["dashboard", "profile", "login", "signup"].includes(nextScreen)) {
            setScreen(nextScreen);
        }
    };

    const handleLogout = () => {
        logoutUser();
        setCurrentUser(null);
        setScreen("login");
    };

    if (screen === "signup") {
        return <SignUp onSwitchToLogin={() => setScreen("login")} onSignUpSuccess={handleSignUpSuccess} />;
    }

    if (screen === "dashboard") {
        return (
            <Dashboard
                user={currentUser}
                onLogout={handleLogout}
                onNavigate={handleNavigate}
            />
        );
    }

    if (screen === "profile") {
        return (
            <ProfileSettings
                user={currentUser}
                onLogout={handleLogout}
                onNavigate={handleNavigate}
                activeItem="profile"
            />
        );
    }

    return (
        <Login
            onSwitchToSignUp={() => setScreen("signup")}
            onLoginSuccess={handleLoginSuccess}
        />
    );
}

export default App;