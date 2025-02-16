import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check if user is logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token on logout
        setIsLoggedIn(false);
        navigate("/login"); // Redirect to login page
    };

    return (
        <nav className="navbar">
            {/* Left Side */}
            <div className="nav-left">
                <h2 className="logo">Hunger</h2>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/filters">Filters</Link></li>
                    <li><Link to="/sell">Sell</Link></li>
                    <li>
                        {isLoggedIn ? (
                            <Link to="/profile">Profile</Link>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                    {isLoggedIn && (
                        <li>
                            <button className="logout-btn" onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </div>

            {/* Right Side - Search Bar */}
            <div className="nav-right">
                <input type="text" placeholder="Search food..." className="search-input" />
                <button className="search-btn"><Search size={20} /></button>
            </div>
        </nav>
    );
};

export default Navbar;
