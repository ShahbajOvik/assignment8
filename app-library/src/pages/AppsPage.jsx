import React, { useEffect, useMemo, useState } from "react";
import appsData from "../data/apps.json";
import AppCard from "../components/AppCard";
import Loading from "../components/Loading";

export default function AppsPage() {
    const [query, setQuery] = useState("");
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [sortOrder, setSortOrder] = useState(""); // "", "high-low", "low-high"

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let result = appsData.filter(a => a.title.toLowerCase().includes(q));
        if (sortOrder === "high-low") {
            result = result.sort((a, b) => b.downloads - a.downloads);
        } else if (sortOrder === "low-high") {
            result = result.sort((a, b) => a.downloads - b.downloads);
        }
        return result;
    }, [query, sortOrder]);

    useEffect(() => {
        if (query.length > 0) {
            setLoadingSearch(true);
            const t = setTimeout(() => setLoadingSearch(false), 450); // simulate search loading
            return () => clearTimeout(t);
        }
        setLoadingSearch(false);
    }, [query]);

    return (
        <main className="container page-apps">
            <header className="apps-header">
                <div><h1>Our All Applications</h1>
                    <p className="muted">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className="apps-actions">
                    <div className="apps-count">({appsData.length}) Apps Found</div>
                    <div className="search-sort">
                        <input placeholder="search Apps" value={query} onChange={e => setQuery(e.target.value)} />
                        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                            <option value="">Sort by Downloads</option>
                            <option value="high-low">High - Low</option>
                            <option value="low-high">Low - High</option>
                        </select>
                    </div>
                </div>
            </header>

            {loadingSearch ? <Loading /> : (
                <>
                    {filtered.length === 0 ? (
                        <div className="notfound">No App Found</div>
                    ) : (
                        <div className="apps-grid">
                            {filtered.map(app => <AppCard key={app.id} app={app} />)}
                        </div>
                    )}
                </>
            )}
        </main>
    );
}
