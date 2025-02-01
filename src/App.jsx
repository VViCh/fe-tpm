import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import PublicRoute from "./components/PublicRoute";
import Dashboard from "./components/UserDashboard";
import Profile from "./components/UserDashboard/Profile";
import Timeline from "./components/UserDashboard/Timeline";
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/LandingComponents/Navbar";
import Temporary from "./components/Temporary";
import LandingPage from "./components/LandingPage";
import AdminPanel from "./components/AdminPanel";
import ViewData from "./components/ViewDataPage";
import "./App.css";

function App() {
    return (
        <div className="container">
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Temporary />}></Route>
                        <Route exact path="/home" element={
                                <>
                                    <LandingPage />
                                </>
                            }
                        ></Route>
                        <Route path="/login" element={
                                <PublicRoute>
                                    <Login />
                                </PublicRoute>
                            }
                        />
                        <Route path="/register" element={
                                <PublicRoute>
                                    <Register />
                                </PublicRoute>
                            }
                        />
                        <Route path="/dashboard" element={
                                <ProtectedRoute>
                                    <Navigate to="/dashboard/profile" replace />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/dashboard" element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        >
                            <Route path="profile" element={<Profile />} />
                            <Route path="timeline" element={<Timeline />} />
                        </Route>
                        <Route path="/manage" element={
                                <ProtectedAdminRoute>
                                    <AdminPanel />
                                </ProtectedAdminRoute>
                            }
                        ></Route>
                        <Route path="/manage/view/:id" element={
                                <ProtectedAdminRoute>
                                    <ViewData />
                                </ProtectedAdminRoute>
                            }
                        ></Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;