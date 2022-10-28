import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Routes
} from "react-router-dom";
import About from "../../pages/About/About";

const Header = () => {
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/about" element={<About />}>
                    </Route>
                </Routes>
            </header>
        </Router>
    );
};

export default Header;
