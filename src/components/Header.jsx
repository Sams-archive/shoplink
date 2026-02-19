import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingNav = ({
  delay = 0,
  links = [],
  buttonText = "Login/Signup",
  buttonPath = "/auth",
}) => {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.8 }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#0e3b29]
        backdrop-blur-md
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="text-white text-xl sm:text-2xl font-semibold cursor-pointer hover:text-[#ffd54f] transition-colors"
          >
            🛒 ShopLink
          </div>

          {/* Links + Button */}
          <div className="flex items-center gap-4 sm:gap-8">

            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  if (link.path) {
                    e.preventDefault();
                    navigate(link.path);
                  }
                }}
                className="
                  relative text-sm sm:text-base
                  text-white/80
                  hover:text-[#ffd54f]
                  transition-all duration-300
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-[#ffd54f]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => navigate(buttonPath)}
              className="
                bg-[#22c55e]
                text-white
                px-4 sm:px-6
                py-2
                rounded-xl
                font-semibold
                text-sm sm:text-base
                transition-all duration-200
                hover:bg-[#ffd54f]
                hover:text-[#0d4d33]
                hover:scale-105
                shadow-md
              "
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      
    </motion.nav>
  );
};

export default LandingNav;
