import { useState } from "react";

export default function Navbar() {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const isLoggedIn = token;
    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <nav className="flex items-center gap-4 p-4 text-2xl">
            <ul className="flex items-center gap-4">
                <li><a href="/">Home</a></li>
            </ul>
            <ul className="flex items-center gap-4">
                <li><a href="/users">Users</a></li>
            </ul>
            {!isLoggedIn && <ul className="flex items-center gap-4">
                <li><a href="/login">Login</a></li>
                {/* <li><a href="/register">Register</a></li> */}
            </ul>}
            {isLoggedIn && <ul className="flex items-center gap-4">
                {/* <li><a href="/dashboard">Dashboard</a></li> */}
                <li><a href="#" onClick={handleLogout}>Logout</a></li>
            </ul>}
        </nav>
    );
}