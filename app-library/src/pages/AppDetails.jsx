import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import appsData from "../data/apps.json";
import { getInstalledApps, saveInstalled } from "../utils/storage";
import { toast } from "react-toastify";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AppDetails() {
    const { id } = useParams();
    const app = useMemo(() => appsData.find(a => String(a.id) === String(id)), [id]);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedIds = getInstalledApps();
        setInstalled(installedIds.includes(Number(id)));
    }, [id]);

    if (!app) {
        return (
            <main className="container">
                <div className="notfound">
                    <img src="/404.png" alt="not found" style={{ width: 300 }} />
                    <h2>App not found</h2>
                    <p>The app you're looking for doesn't exist.</p>
                    <Link to="/apps" className="btn">Back to Apps</Link>
                </div>
            </main>
        );
    }

    const onInstall = () => {
        let installedIds = getInstalledApps();
        if (!installedIds.includes(app.id)) {
            installedIds.push(app.id);
            saveInstalled(installedIds);
            setInstalled(true);
            toast.success(`${app.title} installed`);
        }
    };

    const chartData = app.ratings.map(item => {
        const name = item.name.replace(" star", "");
        return { name, count: item.count };
    });

    return (
        <main className="container app-details">
            <div className="details-top">
                <div className="left">
                    <img className="app-large" src={app.image} alt={app.title} />
                </div>
                <div className="right">
                    <h2>{app.title}</h2>
                    <div className="muted">Developed by <strong>{app.companyName}</strong></div>

                    <div className="stats-row">
                        <div className="stat">
                            <div className="stat-value">{formatCount(app.downloads)}</div>
                            <div className="muted">Downloads</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">{app.ratingAvg}</div>
                            <div className="muted">Average Ratings</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">{formatCount(app.reviews)}</div>
                            <div className="muted">Total Reviews</div>
                        </div>
                    </div>

                    <div>
                        <button className={`btn ${installed ? 'disabled' : ''}`} disabled={installed} onClick={onInstall}>
                            {installed ? 'Installed' : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>
            </div>

            <hr />

            <section>
                <h3>Ratings</h3>
                <div style={{ height: 260 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} layout="vertical" margin={{ left: 40 }}>
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip />
                            <Bar dataKey="count" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>

            <section>
                <h3>Description</h3>
                <p className="muted">{app.description}</p>
            </section>
        </main>
    );
}

function formatCount(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n;
}
