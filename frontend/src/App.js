import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/Signup";

function Layout() {
    const location = useLocation();
    const hideNavbarRoutes = ["/login", "/signup"];

    return (
        <>
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/filters" element={<h1>Filters Page</h1>} />
                <Route path="/sell" element={<h1>Sell Page</h1>} />
                <Route path="/profile" element={<h1>Profile Page</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
