import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import useTheme from "../../context/useTheme";
import useLanguage from "../../context/useLanguage";

const Hero = () => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use useMemo to recreate slides when translation or theme changes
  const slides = useMemo(
    () => [
      {
        id: 1,
        title: t("hero.slides.0.title") || "Enterprise Cybersecurity",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
        color: theme.primary,
      },
      {
        id: 2,
        title: t("hero.slides.1.title") || "Cloud Software Engineering",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
        color: theme.secondary,
      },
      {
        id: 3,
        title: t("hero.slides.2.title") || "Digital Transformation",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
        color: theme.primary,
      },
    ],
    [t, theme.primary, theme.secondary]
  ); // Add dependencies

  // Auto-rotate slides - updated dependency
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Get translations for other parts
  const brandName = t("hero.brandName") || "Secure Growth with COSECO";
  const mainTitle = t("hero.title") || "Build Secure Digital Systems";
  const subtitle =
    t("hero.subtitle") ||
    "Dutch-engineered software, cloud platforms, and cybersecurity solutions designed to protect, scale, and transform modern businesses.";
  const ctaPrimary = t("hero.cta.primary") || "Start Secure Project";
  const ctaSecondary = t("hero.cta.secondary") || "Explore Solutions";
  const viewProjectText = t("hero.cta.viewProject") || "VIEW PROJECT";

  // Debug: Log language changes
  useEffect(() => {
    console.log("Hero: Language changed to", language);
    console.log(
      "Hero slides titles:",
      slides.map((s) => s.title)
    );
  }, [language, slides]);

  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Side: Content */}
      <motion.div
        className="content-side"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-wrapper">
          <motion.span
            className="brand-name"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {brandName}
          </motion.span>

          <motion.h1
            className="main-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            {mainTitle}
            <motion.span
              className="arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatDelay: 1,
              }}
            >
              →
            </motion.span>
          </motion.h1>

          {/* Subtitle with typing animation */}
          <motion.p
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="cta-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="cta-primary"
              whileHover={{
                scale: 1.05,
                backgroundColor: theme.primary,
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ borderColor: theme.primary }}
            >
              <span>{ctaPrimary}</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                ↗
              </motion.span>
            </motion.button>

            <motion.button
              className="cta-secondary"
              whileHover={{
                scale: 1.05,
                backgroundColor: theme.surface,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{ctaSecondary}</span>
              <span>↘</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side: Image with Overlay Controls */}
      <motion.div
        className="image-side"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="image-wrapper">
          {/* Animated Slides */}
          {slides.map((slide, index) => (
            <motion.div
              key={`${slide.id}-${language}`} // Add language to key to force re-render
              className={`slide ${index === currentSlide ? "active" : ""}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.1,
              }}
              transition={{ duration: 0.8 }}
            >
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <div
                className="slide-overlay"
                style={{
                  background: `linear-gradient(45deg, ${slide.color}20, transparent)`,
                }}
              />
            </motion.div>
          ))}

          {/* Progress Indicator */}
          <motion.div
            className="progress-indicator"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, repeat: Infinity }}
            key={currentSlide} // Reset animation on slide change
          />

          {/* Slider Controls */}
          <div className="slider-nav">
            <motion.button
              className="nav-btn prev-btn"
              onClick={prevSlide}
              style={{ color: theme.primary }}
              whileHover={{
                scale: 1.1,
                backgroundColor: theme.glassBackground,
              }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>

            <motion.div
              className="counter"
              key={`${currentSlide}-${language}`} // Add language to key
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </motion.div>

            <motion.button
              className="nav-btn next-btn"
              onClick={nextSlide}
              style={{ color: theme.primary }}
              whileHover={{
                scale: 1.1,
                backgroundColor: theme.glassBackground,
              }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>

          {/* Slide Dots */}
          <div className="slide-dots">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{
                  backgroundColor:
                    index === currentSlide ? theme.primary : theme.border,
                }}
              />
            ))}
          </div>

          {/* View Project Button */}
          <motion.div
            className="view-project"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{
              x: 10,
              backgroundColor: theme.primary,
              color: theme.background,
            }}
            style={{ borderColor: theme.border }}
          >
            <span>{viewProjectText}</span>
            <motion.span
              className="arrow"
              animate={{ x: [0, 5, 0] }}
              style={{ color: theme.primary }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.div>

          {/* Slide Title */}
          <motion.div
            className="slide-title"
            key={`${currentSlide}-${language}`} // Add language to key
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides[currentSlide]?.title || "Slide Title"}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
