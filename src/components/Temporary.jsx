import { Link } from "react-router-dom";
import TemporaryStyle from "./styles/Temporary.module.css"

const Temporary = () => {
    return (
        <div className={TemporaryStyle.container}>
            <Link
                to="/home"
                className={TemporaryStyle.button}
            >
                Landing Page
            </Link>
            <Link
                to="/login"
                className={TemporaryStyle.button}
            >
                Login
            </Link>
            <Link
                to="/register"
                className={TemporaryStyle.button}
            >
                Register
            </Link>
            <Link
                to="/dashboard"
                className={TemporaryStyle.button}
            >
                User Dashboard
            </Link>
            <Link
                to="/manage"
                className={TemporaryStyle.button}
            >
                Admin Panel
            </Link>
        </div>
    )
}

export default Temporary;