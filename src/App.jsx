import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/landingPage.jsx";
import HowItWorks from "./pages/Howitworks.jsx";
import Footer from "./components/Footer.jsx";
import Features from "./pages/Features.jsx";
import Explore from "./pages/Browse.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import SellerSignup from "./pages/SellerSignupPage.jsx";
import SellerDashboard from "./pages/SellerDashboard.jsx";


function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <>
      {/* Pages render their own navbars; App does not inject a global landing nav */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/auth" element={<AuthPage />} /> 
        <Route path="/seller-signup" element={<SellerSignup />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="*" element={<h2 style={{ padding: 100, textAlign: "center" }}>Page Not Found</h2>} />
      </Routes>
      {!isLandingPage && <Footer />}
    </>
  );
}

export default App;