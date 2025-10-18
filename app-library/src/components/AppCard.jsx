import React from "react";
import { Link } from "react-router-dom";

export default function AppCard({ app }) {
    return (
        <Link to={`/apps/${app.id}`} className="app-card">
            <div className="app-image">
                <img src={app.image} alt={app.title} />
            </div>
            <div className="app-info">
                <div className="app-title">{app.title}</div>
                <div className="app-meta">
                    <span className="downloads">⬇ {formatCount(app.downloads)}</span>
                    <span className="rating">⭐ {app.ratingAvg}</span>
                </div>
            </div>
        </Link>
    );
}

function formatCount(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n;
}
