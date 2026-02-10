
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const LandingNav = ({ delay }) => {
//   const navigate = useNavigate();

  

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: delay, duration: 0.8 }}
//       className="landing-nav"
//     >
//       <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
//         🛒 ShopLink
//       </div>

//       <div className="links">
//       <a href="#features" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Home</a>
//         <a href="#features" onClick={() => navigate("/features")}>Features</a>
//         <a href="#how-it-works"  onClick={() => navigate("/how-it-works")}>How it works</a>
//         <button
//       className="btn-primary"
//       onClick={() => navigate("/auth")}
//     >
//       Login/Signup
//     </button> 
//       </div>
//     </motion.nav>
//   );
// };

// export default LandingNav;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingNav = ({ delay = 0, links = [], buttonText = "Login/Signup", buttonPath = "/auth" }) => {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.8 }}
      className="landing-nav"
    >
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        🛒 ShopLink
      </div>

      <div className="links">
        {/* Map through the links prop to generate dynamic menu items */}
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
          >
            {link.label}
          </a>
        ))}

        {/* Dynamic primary button */}
        <button
          className="btn-primary"
          onClick={() => navigate(buttonPath)}
        >
          {buttonText}
        </button>
      </div>
    </motion.nav>
  );
};

export default LandingNav;
   