import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, Routes
} from "react-router-dom";
import About from "../../pages/About/About";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <Router>
            <header>
                <nav className={styles.header}>at
                    <ul className={styles.menu}>
                        <li>
                            <Link to="/" className={styles.link}>News</Link>
                        </li>
                        <li>
                            <Link to="/projects" className={styles.link}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/notes" className={styles.link}>Notes</Link>
                        </li>
                        <li>
                            <Link to="/kanban" className={styles.link}>Kanban</Link>
                        </li>
                        <li>
                            <Link to="/about" className={styles.link}>About</Link>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/about" element={<About/>}>
                    </Route>
                </Routes>
            </header>
        </Router>
    );
};

export default Header;
