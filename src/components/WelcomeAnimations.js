// components/WelcomeAnimation.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./WelcomeAnimation.css";
import RingIcon from "../assets/ring.png";

const WelcomeAnimation = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update confetti size on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="welcome-container">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={300} // Adjust the number of confetti pieces
      />
      <motion.div
        className="welcome-message"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 200 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We're Engaged!
        </motion.h1>
        <motion.img
          src={RingIcon} // Replace with your engagement ring icon
          alt="Engagement Ring"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="ring-icon"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Mohamed & Esraa
        </motion.p>
        {/* Add the Date */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="date"
        >
          20 / 9 / 2024
        </motion.p>
      </motion.div>
      <motion.div
        className="confetti"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        🎉 🎊 🎉 🎊
      </motion.div>
    </div>
  );
};

export default WelcomeAnimation;
