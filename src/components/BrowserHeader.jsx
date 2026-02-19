import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BrowseHeader = ({ onSearch }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div
          className="text-xl font-bold cursor-pointer text-gray-900"
          onClick={() => navigate("/")}
        >
          🛒 ShopLink
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 hidden sm:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search shops by name..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="flex-shrink-0">
          <button
            onClick={() => navigate("/seller-signup")}
            className="bg-green-500 hover:bg-yellow-400 hover:text-gray-900 text-white font-semibold rounded-full px-4 py-2 sm:px-5 sm:py-2 transition-all shadow-md"
          >
            Open a Shop
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search shops by name..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full rounded-full border border-gray-300 px-4 py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

    </motion.div>
  );
};

export default BrowseHeader;
