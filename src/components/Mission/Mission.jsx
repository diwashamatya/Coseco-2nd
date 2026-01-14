import React, { useState } from "react";
import { motion } from "framer-motion";
import useLanguage from "../../context/useLanguage";
import "./Mission.css";

const MissionMarquee = () => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // Get the mission object
  const missionObj = t("mission");

  // Check if it's an object or string
  if (typeof missionObj === "string") {
    return (
      <div className="mission-marquee-container">
        <h2 className="mission-marquee-heading">
          Main Focus / Mission Statement
        </h2>
      </div>
    );
  }

  // If it's an object, extract data
  const heading = missionObj?.heading || "Main Focus / Mission Statement";
  const missions = missionObj?.items || [];

  // Calculate total width for marquee
  const cardWidth = 500; // Updated to match CSS
  const gap = 60; // Updated to match CSS
  const totalWidth = missions.length * (cardWidth + gap) * 2;

  return (
    <div
      className="mission-marquee-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.h2
        className="mission-marquee-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>

      <div className="mission-marquee-window">
        <motion.div
          className="mission-marquee-content"
          animate={{ x: [0, -totalWidth / 2] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: isHovered ? 50 : 35, // Slower speed - increased from 20/40
              ease: "linear",
            },
          }}
        >
          {/* Double the array for seamless looping */}
          {[...missions, ...missions].map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="mission-card"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (index % missions.length) * 0.1,
              }}
              viewport={{ once: true }}
            >
              <motion.span
                className="mission-number"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
              >
                {item.id}
              </motion.span>
              <div className="mission-content">
                <h3 className="mission-title">
                  {item.title || `Mission ${item.id}`}
                </h3>
                <p className="mission-text">{item.text}</p>
                <div className="mission-divider" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="marquee-gradient-left" />
      <div className="marquee-gradient-right" />
    </div>
  );
};

export default MissionMarquee;
