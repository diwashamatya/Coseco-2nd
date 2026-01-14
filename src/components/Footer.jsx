import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Branding */}
          <div className="footer-brand">
            <h2 className="footer-logo">
              COSECO<span>.</span>
            </h2>
            <p className="footer-tagline">
              Engineering the digital backbone of global mobility since 2018.
            </p>
            <div className="footer-socials">
              <a href="#">LN</a>
              <a href="#">GH</a>
              <a href="#">TW</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links">
            <h4>Platform</h4>
            <ul>
              <li>
                <a href="/solutions">Solutions</a>
              </li>
              <li>
                <a href="/cloud">Cloud Systems</a>
              </li>
              <li>
                <a href="/security">Security</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p>Get the latest in smart mobility.</p>
            <div className="footer-input-group">
              <input type="email" placeholder="Email Address" />
              <button>→</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 COSECO Technology B.V. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
