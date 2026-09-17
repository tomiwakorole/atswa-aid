import React, { useState } from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import "./App.css";

function App() {
    const [screen, setScreen] = useState("login");

    if (screen === "signup") {
        return <SignUp onSwitchToLogin={() => setScreen("login")} />;
    }

    return <Login onSwitchToSignUp={() => setScreen("signup")} />;
}

export default App;