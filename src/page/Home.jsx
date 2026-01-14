import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./HomePage.css";

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play video with muted attribute for better UX
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div className="homepage">
      {/* Background Video */}
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <div className="video-fallback">
            <img src="/images/hero-fallback.jpg" alt="Engineering background" />
          </div>
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          {/* Logo & Tagline */}
          <div className="hero-header">
            <motion.h1
              className="hero-logo"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              COSECO
              <span className="logo-dot">.</span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Engineering the digital backbone of global mobility since 2018.
            </motion.p>
          </div>

          {/* Main Hero Content */}
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="hero-title">
                We build the infrastructure
                <span className="gradient-text"> that moves the world</span>
              </h2>
              <p className="hero-description">
                From smart cities to autonomous transportation systems, we
                develop scalable solutions that power the future of mobility.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn-primary">
                <span>Get Started</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="btn-secondary">
                <span>View Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 3H21V9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Global Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">System Uptime</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2018</div>
                  <div className="stat-label">Established</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span className="scroll-text">Scroll to explore</span>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <motion.div
              className="feature-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">High Performance</h3>
              <p className="feature-description">
                Optimized systems delivering exceptional speed and reliability.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Enterprise Security</h3>
              <p className="feature-description">
                Military-grade encryption and security protocols.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">Scalable Solutions</h3>
              <p className="feature-description">
                Grow seamlessly with our modular infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
