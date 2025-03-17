import { fetchOneUser } from "@/fetch/users";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAdmin, setIsAdmin] = useState(false);
    const isLoggedIn = token;
    const userToken = localStorage.getItem('user') ?? '';
    const user = JSON.parse(userToken);

    const getUser = async (token: string) => {
        const response = await fetchOneUser(token, user.id);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setIsAdmin(responseJSON.isAdmin);
    };

    useEffect(() => {
        if (token) {
            getUser(token);
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <nav className="flex items-center gap-4 p-4 text-2xl">
            <ul className="flex items-center gap-4">
                <li><a href="/">Home</a></li>
            </ul>

            {!isLoggedIn && <ul className="flex items-center gap-4">
                <li><a href="/login">Login</a></li>
                {/* <li><a href="/register">Register</a></li> */}
            </ul>}
            {isLoggedIn && <ul className="flex items-center gap-4">
                {isAdmin && <ul className="flex items-center gap-4">
                    <li><a href="/users">Users</a></li>
                </ul>}
                {/* <li><a href="/dashboard">Dashboard</a></li> */}
                <li><a href="#" onClick={handleLogout}>Logout</a></li>
            </ul>}
        </nav>
    );
}