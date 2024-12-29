import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./utils/AuthContext";
import Nav from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

function App() {
  return (
    <AuthProvider>
        <Router>
            <Nav />
            <Routes>
                <Route exact path="/" element={<LandingPage />}></Route>
            </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
