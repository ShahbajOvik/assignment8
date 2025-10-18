import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appsData from "../data/apps.json";
import { getInstalledApps, uninstallApp } from "../utils/storage";
import { toast } from "react-toastify";

export default function MyInstallation() {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const installedIds = getInstalledApps();
        const apps = appsData.filter(app => installedIds.includes(app.id));
        setInstalledApps(apps);
    }, []);

    const handleUninstall = (appId, appTitle) => {
        uninstallApp(appId);
        setInstalledApps(prev => prev.filter(app => app.id !== appId));
        toast.success(`${appTitle} uninstalled`);
    };

    return (
        <main className="container">
            <h1>My Installed Apps</h1>
            {installedApps.length === 0 ? (
                <div className="notfound">
                    <h2>No apps installed</h2>
                    <p>You haven't installed any apps yet.</p>
                    <Link to="/apps" className="btn">Browse Apps</Link>
                </div>
            ) : (
                <div className="apps-grid">
                    {installedApps.map(app => (
                        <div key={app.id} className="app-card">
                            <img src={app.image} alt={app.title} />
                            <h3>{app.title}</h3>
                            <p className="muted">{app.companyName}</p>
                            <div className="app-card-actions">
                                <Link to={`/apps/${app.id}`} className="btn">View Details</Link>
                                <button
                                    className="btn danger"
                                    onClick={() => handleUninstall(app.id, app.title)}
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}