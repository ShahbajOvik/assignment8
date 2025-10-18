import React, { useEffect, useState } from "react";
import appsData from "../data/apps.json";
import AppCard from "../components/AppCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const top8 = appsData.slice(0, 8);
    const navigate = useNavigate();

    return (
        <main>
            <section className="banner">
                <div className="container banner-inner">
                    <h1>We Build <span className="accent">Productive</span> Apps</h1>
                    <p className="muted">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter and more exciting.</p>
                    <div className="banner-actions">
                        <a className="btn" href="https://play.google.com" target="_blank" rel="noreferrer">Google Play</a>
                        <a className="btn outline" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">App Store</a>
                    </div>
                </div>
            </section>

            <section className="states">
                <div className="container states-grid">
                    <div className="state-card one">
                        <h3>29.6M</h3>
                        <p className="muted">Total Downloads</p>
                    </div>
                    <div className="state-card two">
                        <h3>906K</h3>
                        <p className="muted">Total Reviews</p>
                    </div>
                    <div className="state-card three">
                        <h3>132+</h3>
                        <p className="muted">Active Apps</p>
                    </div>
                </div>
            </section>

            <section className="top-apps">
                <div className="container">
                    <h2>Trending Apps</h2>
                    <p className="muted">Explore All Trending Apps on the Market developed by us</p>

                    <div className="apps-grid">
                        {top8.map((app) => <AppCard app={app} key={app.id} />)}
                    </div>

                    <div className="center">
                        <button className="btn" onClick={() => navigate("/apps")}>Show All</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
