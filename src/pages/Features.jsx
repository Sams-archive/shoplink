import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LandingNav from "../components/Header";

const features = [
  {
    title: "One link for all your products",
    text: "Create a single link that shows your entire product catalogue. Share it once on WhatsApp or anywhere.",
  },
  {
    title: "Stop daily status posting",
    text: "No more posting 10–20 product images every day. Update your catalogue once and you're done.",
  },
  {
    title: "Sell through WhatsApp chat",
    text: "Customers browse your products and message you directly on WhatsApp to buy.",
  },
  {
    title: "Easy product updates",
    text: "Add, edit, or remove products anytime. Changes reflect instantly on your link.",
  },
  {
    title: "Share beyond your contacts",
    text: "Share your ShopLink on Instagram, Facebook, WhatsApp, or anywhere. Anyone with the link can view your products.",
  },
  {
    title: "Easy for buyers",
    text: "Buyers see everything you sell in one place before messaging you.",
  },
  {
    title: "You stay in control",
    text: "You talk to customers directly. ShopLink doesn’t take over your sales.",
  },
];

const Features = () => {
  const navigate = useNavigate();
  return (
    <div>
   <LandingNav 
  delay={0.5} 
  links={[
    { label: "Features", path: "/features" },
    { label: "How it works", path: "/how-it-works" }
  ]} 
  buttonText="Back to Home" 
  buttonPath="/"
/>
    <div className="features-page">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="features-header"
      >
        <h1>Everything you need to sell on WhatsApp🔥</h1>
        <p>
          One link that shows all your products — no daily posting required.
        </p>
      </motion.div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="feature-card-title">{feature.title}</h3>
            <p>{feature.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="features-cta">
        <button className="btn-primary" onClick={() => window.location.href = "/seller-signup"}>
          Create your ShopLink
        </button>
      </div>
    </div>


    </div>
    
  );
};

export default Features;
