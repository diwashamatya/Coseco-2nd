import React, { useState, useEffect } from "react";
import useLanguage from "../context/useLanguage";
import useTheme from "../context/useTheme";
import "./Navbar.css";
import logo from "../assets/Logo.jpg";

export default function Navbar() {
  const { t, language, changeLanguage } = useLanguage();
  const { themeName, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { key: "home", label: t("home") || "Home" },
    { key: "gallery", label: t("gallery") || "Gallery" },
    { key: "projects", label: t("projects") || "Projects" },
    { key: "certifications", label: t("certifications") || "Certifications" },
    { key: "contacts", label: t("contacts") || "Contacts" },
  ];

  return (
    <>
      <nav className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links desktop-nav">
          {navItems.map((item) => (
            <a key={item.key} href="#">
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="navbar-controls desktop-controls">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="nl">NL</option>
          </select>
          <button onClick={toggleTheme}>{themeName}</button>
        </div>

        {/* Mobile Burger Button */}
        <button
          className={`burger-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
        <div className="mobile-menu-header">
          <button className="close-menu-btn" onClick={closeMenu}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mobile-menu-content">
          <div className="mobile-links">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href="#"
                onClick={closeMenu}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mobile-controls">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="nl">Nederlands</option>
            </select>
            <button onClick={toggleTheme}>
              {themeName === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
}
