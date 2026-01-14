import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Shield,
  Palette,
  Server,
  Zap,
  ArrowRight,
} from "lucide-react";
import "./Services.css";

const serviceIcons = {
  "Web Development": Code,
  "Cloud Solutions": Cloud,
  "Cyber Security": Shield,
  "UI/UX Design": Palette,
  DevOps: Server,
  "AI/ML Solutions": Zap,
};

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, high-performance websites and applications",
    icon: "Web Development",
    color: "#2563eb",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Load Times",
      "Cross-Browser Compatibility",
    ],
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Scalable infrastructure for growing businesses",
    icon: "Cloud Solutions",
    color: "#7c3aed",
    features: [
      "Cloud Migration",
      "Serverless Architecture",
      "Cost Optimization",
      "24/7 Monitoring",
    ],
  },
  {
    id: 3,
    title: "Cyber Security",
    description: "Protect your digital assets and data",
    icon: "Cyber Security",
    color: "#dc2626",
    features: [
      "Threat Analysis",
      "Penetration Testing",
      "Data Encryption",
      "Compliance Support",
    ],
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Beautiful interfaces that users love",
    icon: "UI/UX Design",
    color: "#0891b2",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Interactive UI Design",
      "Accessibility Standards",
    ],
  },
  {
    id: 5,
    title: "DevOps",
    description: "Automate and streamline development",
    icon: "DevOps",
    color: "#059669",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Automated Testing",
      "Monitoring & Alerts",
    ],
  },
  {
    id: 6,
    title: "AI/ML Solutions",
    description: "Intelligent automation and insights",
    icon: "AI/ML Solutions",
    color: "#d97706",
    features: [
      "Predictive Analytics",
      "Computer Vision",
      "Natural Language Processing",
      "Custom ML Models",
    ],
  },
];

const Services = () => {
  return (
    <section className="image-style-section">
      <div className="image-style-grid">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon];
          const displayId = service.id.toString().padStart(2, "0");

          return (
            <motion.div
              key={service.id}
              className="image-style-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="number-container">
                <span className="ghost-number">{displayId}</span>
              </div>

              <div className="divider-line" />

              <div className="item-body">
                <div className="icon-area">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <div className="text-area">
                  <h3 className="item-title">{service.title}</h3>
                  <p className="item-desc">{service.description}</p>

                  {/* Features List */}
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className="minimal-btn"
                  style={{ "--btn-color": service.color }}
                >
                  LEARN MORE <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
