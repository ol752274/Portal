import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/filters" element={<h1>Filters Page</h1>} />
                <Route path="/sell" element={<h1>Sell Page</h1>} />
                <Route path="/profile" element={<h1>Profile Page</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
