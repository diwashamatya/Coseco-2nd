import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import useLanguage from "../../context/useLanguage";

const AboutSection = () => {
  const { t } = useLanguage();

  // Get translations for text content
  const title = t("about.title") || "About COSECO";
  const paragraph1 =
    t("about.paragraph1") ||
    "COSECO is a leading provider of enterprise cybersecurity, cloud software engineering, and digital transformation services. We help businesses protect, scale, and modernize their digital infrastructure.";
  const paragraph2 =
    t("about.paragraph2") ||
    "Our team combines cutting-edge technology with strategic insights to deliver solutions that are secure, scalable, and sustainable.";
  const buttonText = t("about.buttonText") || "READ MORE";

  // Get alt text translations for images
  const alt1 = t("about.alt1") || "Tech infrastructure";
  const alt2 = t("about.alt2") || "Business technology";
  const alt3 = t("about.alt3") || "Modern technology solutions";

  return (
    <section className="about-container">
      <div className="about-content">
        {/* Images */}
        <div className="image-grid">
          <motion.div
            className="column-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="img-wrapper top-left">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt={alt1}
              />
            </div>
            <div className="img-wrapper bottom-left">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt={alt2}
              />
            </div>
          </motion.div>

          <motion.div
            className="column-right"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="img-wrapper main-img">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt={alt3}
              />
            </div>
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.div
          className="text-block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h1 className="title">{title}</h1>
          <div className="description">
            <p className="lead-text">{paragraph1}</p>
            <p className="body-text">{paragraph2}</p>
          </div>
          <motion.button
            className="read-more-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText} <span>&rarr;</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
