import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [hostel, setHostel] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5001/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, hostel, password, confirmPassword }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Signup Successful");
            navigate("/login");
        } else {
            alert(data.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Institute Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Hostel (e.g., BH3)" value={hostel} onChange={(e) => setHostel(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Signup</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;
