
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Feature from "../assets/features.png"; 
import EasyToUseIcon from "../assets/easy.png";
import SellMoreIcon from "../assets/trade.png";
import GrowIcon from "../assets/grow.png";



const LandingPage = () => {
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
  navigate("/seller-signup"); 
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
  Stop posting every product. <br />
  Share <span>one link</span> instead.
</h1>

<p>
  Put your entire product catalogue in one link. <br/> Share it on WhatsApp once,
  and let customers browse and message you to buy.
</p>

{/* <h1>
  Turn one WhatsApp link <br />
  into your <span>product catalogue</span>
</h1>

<p>
  No daily status posting. Share one link that shows everything you sell
  and chat with customers to complete sales.
</p>

<h1>
  One WhatsApp link. <br />
  <span>All</span> your products.
</h1>

<p>
  Create a simple catalogue link you can post once.
  Customers view your products and place orders through WhatsApp.
</p> */}


        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
          onClick={goToGetStarted}
        >
          Get Started
        </motion.button> */}
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
          Start Selling
        </motion.button> 
        
         <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
          onClick={goToBrowse}
        >
          Continue as Buyer
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

export default LandingPage;
