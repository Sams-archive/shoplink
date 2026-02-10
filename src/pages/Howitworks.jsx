import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LandingNav from "../components/Header.jsx";

const steps = [
  {
    step: "01",
    title: "Create your ShopLink",
    text: "Set up your catalogue by adding your products, prices, and photos in one place.",
  },
  {
    step: "02",
    title: "Share one link",
    text: "Post your ShopLink on WhatsApp status, Instagram bio, or send it directly to customers.",
  },
  {
    step: "03",
    title: "Customers browse your products",
    text: "Buyers view everything you sell from the link without asking for prices one by one.",
  },
  {
    step: "04",
    title: "Sell through WhatsApp chat",
    text: "Customers message you on WhatsApp to place orders. You close the sale as usual.",
  },
];

export default function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div>
    <LandingNav 
  delay={0.5} 
  links={[
    { label: "Features", path: "/features" },
    { label: "FAQS", path: "/how-it-works" }
  ]} 
  buttonText="Back to Home" 
  buttonPath="/"
/>
     <div className="how-it-works-page">
      {/* Header */}
      <motion.div
        className="how-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>How ShopLink works</h1>
        <p>
          Sell on WhatsApp without posting your products every day.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="how-steps">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="how-step-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <span className="step-number">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="how-cta">
        <button
          className="btn-primary"
          onClick={() => navigate("/seller-signup")}
        >
          Create your ShopLink
        </button>
      </div>
    </div>
    
    </div>
   
  );
}
