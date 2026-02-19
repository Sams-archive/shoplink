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
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <LandingNav 
        delay={0.5} 
        links={[
          { label: "Features", path: "/features" },
          { label: "How it works", path: "/how-it-works" }
        ]} 
        buttonText="Back to Home" 
        buttonPath="/"
      />

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center px-4 py-16 sm:py-20"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Everything you need to sell on WhatsApp 🔥
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          One link that shows all your products — no daily posting required.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <button
          onClick={() => navigate("/seller-signup")}
          className="btn-primary px-6 py-3 rounded-lg font-semibold hover:scale-105 transition transform"
        >
          Create your ShopLink
        </button>
      </div>
    </div>
  );
};

export default Features;
