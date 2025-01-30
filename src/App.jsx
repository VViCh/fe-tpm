import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./utils/AuthContext";
import Nav from "./components/Navbar";
import Temporary from "./components/Temporary";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import AdminPanel from "./components/AdminPanel";
import ViewData from "./components/ViewDataPage";
import "./App.css";

function App() {
    return (
        <div class="container">
            <AuthProvider>
                <Router>
                    <Nav />
                    <Routes>
                        <Route exact path="/" element={<Temporary />}></Route>
                        <Route exact path="/Home" element={<LandingPage />}></Route>
                        <Route exact path="/login" element={<Login />}></Route>
                        <Route exact path="/register" element={<Register />}></Route>
                        <Route exact path="/dashboard" element={<UserDashboard />}></Route>
                        <Route path="/manage" element={<AdminPanel />}></Route>
                        <Route path="/manage/view/:id" element={<ViewData />}></Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
