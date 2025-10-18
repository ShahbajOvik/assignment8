import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AppsPage from "./pages/AppsPage";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/my-installation" element={<MyInstallation />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </React.Suspense>
  );
}

export default App;
