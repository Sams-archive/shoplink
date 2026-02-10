
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Feature from "../assets/features.png"; 
import EasyToUseIcon from "../assets/easy.png";
import SellMoreIcon from "../assets/trade.png";
import GrowIcon from "../assets/grow.png";



const PageNotFound = () => {
  const navigate = useNavigate();
  const BASE_DELAY = 0.5;


const goToBrowse = (e) => {
  if (e && typeof e.preventDefault === "function") e.preventDefault();
  console.log("LandingPage: navigating to /explore");
  navigate("/explore"); // Use the exact path defined in your App.jsx Routes
};
const goToSellerSignup = (e) => {
  // Prevents the page from refreshing if it's inside a form or <a> tag
  if (e && typeof e.preventDefault === "function") e.preventDefault();
  
  console.log("LandingPage: navigating to /seller-signup");
  
  // Navigate to the seller registration path
  navigate("/"); 
};
  return (
    <div className="landing-container no-scroll">

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY, duration: 0.8 }}
        className="landing-nav"
      >
        <div className="logo">🛒 ShopLink</div>

        <div className="links">
      
          <a href="#features" onClick={() => navigate("/features")}>Features</a>
          <a href="#how-it-works" onClick={() => navigate("/how-it-works")}>How it works</a>
          <button className="btn-primary" onClick={() => navigate("/auth")}>
            Login/Signup
          </button> 
        </div>
      </motion.nav>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 0.5, duration: 1 }}
        className="hero-content"
      >
       <h1>
 Page Not yet <br />
<span>created</span>
</h1>

      </motion.div>

      {/* HERO IMAGE */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -12, 0],
        }}
        transition={{
          opacity: { delay: BASE_DELAY + 1, duration: 1 },
          scale: { delay: BASE_DELAY + 1, duration: 1 },
          y: {
            delay: BASE_DELAY + 2,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        src={Feature}
        alt="ShopLink store preview"
        className="landing-image"
      />

      {/* SECONDARY CTA (optional but clear) */}
      <motion.div
       initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 0.5, duration: 1 }}
        className="hero-btn-group">

      <div className="landing-spacer">
       <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
          onClick={goToSellerSignup}
          
        >
          Back Home
        </motion.button> 
        
         <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
          onClick={goToBrowse}
        >
          Browse Products
        </motion.button> 

      </div>
      </motion.div>
     

      {/* FEATURE STRIP */}
      <motion.div
        id="features"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: BASE_DELAY + 1.5, duration: 0.8 }}
        className="landing-features"
      >
        <div className="feature-item">
          <img src={EasyToUseIcon} width="20" height="20" alt="" />
          Easy to use
        </div>

        <div className="feature-item">
          <img src={SellMoreIcon} width="20" height="20" alt="" />
          Sell more via WhatsApp
        </div>

        <div className="feature-item">
          <img src={GrowIcon} width="20" height="20" alt="" />
          Grow your business
        </div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
