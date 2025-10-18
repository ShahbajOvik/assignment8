import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="container notfound">
            <img src="/404.png" alt="404" style={{ width: 300 }} />
            <h2>404 - Page not found</h2>
            <p>The page you're looking for cannot be found.</p>
            <Link to="/" className="btn">Back to Home</Link>
        </main>
    );
}
