import React from "react";
import { motion } from "framer-motion";
import "./ProjectSection.css";
import useLanguage from "../../context/useLanguage";

const ProjectSection = () => {
  const { t } = useLanguage();

  // Translations using simple keys
  const topTitleLine1 = t("projectsTopTitle1") || "Global";
  const topTitleLine2 = t("projectsTopTitle2") || "Modernization";
  const topDescription =
    t("projectsTopDescription") ||
    "COSECO empowers multinational organizations to centralize and secure their digital assets. Whether managing cross-border cloud migrations or deploying enterprise-grade software, we provide the visibility and protection required to lead in the global marketplace.";
  const topButtonText = t("projectsTopButton") || "Explore Solutions";

  const bottomTitleLine1 = t("projectsBottomTitle1") || "Unified";
  const bottomTitleLine2 = t("projectsBottomTitle2") || "Connected";
  const bottomDescription =
    t("projectsBottomDescription") ||
    "Connect your global workforce with secure, high-performance collaboration frameworks. COSECO bridges the distance between international teams, ensuring that data flows freely where it's needed and stays locked down where it's sensitive—no matter where your offices are located.";
  const bottomButtonText = t("projectsBottomButton") || "Connect Globally";

  return (
    <div className="project-container">
      {/* Top Section: Text Left, Image Right */}
      <section className="project-grid">
        <motion.div
          className="project-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="project-title">
            {topTitleLine1} <br />
            <span>{topTitleLine2}</span>
          </h1>
          <p className="project-desc">{topDescription}</p>
          <motion.button
            className="theme-btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {topButtonText} &rarr;
          </motion.button>
        </motion.div>

        <motion.div
          className="project-image-placeholder"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </section>

      {/* Bottom Section: Illustration Left, Text Right */}
      <section className="project-grid reverse">
        <div className="illustration-wrapper">
          {/* Circular Orbit Illustration */}
          <motion.div
            className="orbit-container"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="orbit-circle large"></div>
            <div className="orbit-circle small"></div>
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </motion.div>
          <div className="center-logo">
            <div className="logo-box">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C17.5228 2 22 6.47716 22 12C22 17.5228 17.5228 22 12 22C6.47716 22 2 17.5228 2 12C2 6.47716 6.47716 2 12 2Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0502 12.4668C14.3212 13.2528 12.3372 14.5828 11.3222 15.0098C11.1602 15.0778 10.7472 15.2218 10.6582 15.2238C10.4692 15.2298 10.2872 15.1238 10.1992 14.9538C10.1652 14.8878 10.0652 14.4568 10.0332 14.2648C9.93815 13.6808 9.88915 12.7738 9.89015 11.8618C9.88915 10.9048 9.94215 9.95483 10.0482 9.37683C10.0762 9.22083 10.1582 8.86183 10.1822 8.80383C10.2272 8.69583 10.3092 8.61083 10.4082 8.55783C10.4842 8.51683 10.5712 8.49483 10.6582 8.49783C10.7472 8.49983 11.1092 8.62683 11.2332 8.67583C12.2112 9.05583 14.2802 10.4338 15.0402 11.2438C15.1082 11.3168 15.2952 11.5128 15.3262 11.5528C15.3972 11.6428 15.4322 11.7518 15.4322 11.8618C15.4322 11.9638 15.4012 12.0678 15.3372 12.1548C15.3042 12.1998 15.1132 12.3998 15.0502 12.4668Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <motion.div
          className="project-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="project-title">
            {bottomTitleLine1} <span>{bottomTitleLine2}</span>
          </h1>
          <p className="project-desc">{bottomDescription}</p>
          <motion.button
            className="theme-btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {bottomButtonText} &rarr;
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectSection;
