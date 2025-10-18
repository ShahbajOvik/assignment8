import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const goHome = () => navigate("/");

    return (
        <header className="site-header">
            <div className="container header-inner">
                <div className="logo" onClick={goHome} role="button">
                    <div className="logo-icon">▶</div>
                    <div className="logo-text">HERO.IO</div>
                </div>

                <nav className="nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                    <NavLink to="/apps" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Apps</NavLink>
                    <NavLink to="/my-installation" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Installation</NavLink>
                </nav>

                <div className="header-actions">
                    <a className="contribute-btn" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                        Contribute
                    </a>
                </div>
            </div>
        </header>
    );
}
