import React from "react";
import { motion } from "framer-motion";
import "./ABCDESection.css";

const sections = [
  {
    id: "A",
    title: "Brake Systems",
    desc: "High-quality brake pads, discs, and complete systems for safety and reliability.",
    color: "#FF4C4C",
    icon: "🛑",
  },
  {
    id: "B",
    title: "Engine Components",
    desc: "Spark plugs, filters, and engine parts designed for peak performance.",
    color: "#4CC9F0",
    icon: "⚙️",
  },
  {
    id: "C",
    title: "Suspension & Steering",
    desc: "Shocks, struts, and steering components for a smooth and stable ride.",
    color: "#FFD93D",
    icon: "🛞",
  },
  {
    id: "D",
    title: "Electrical Parts",
    desc: "Batteries, sensors, and wiring to keep your vehicle running efficiently.",
    color: "#6A4C93",
    icon: "🔋",
  },
  {
    id: "E",
    title: "Air & Fuel Systems",
    desc: "Filters, pumps, and injectors to ensure engine efficiency and longevity.",
    color: "#1A535C",
    icon: "⛽",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ABCDESection = () => {
  return (
    <motion.section
      className="abcde-section-wrapper"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="abcde-section-container">
        {sections.map((sec) => (
          <motion.div
            key={sec.id}
            className="abcde-card"
            variants={cardVariants}
            style={{ borderTop: `6px solid ${sec.color}` }}
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 25px rgba(0,0,0,0.15)" }}
          >
            <div className="abcde-icon" style={{ backgroundColor: sec.color }}>
              {sec.icon}
            </div>
            <h3 className="abcde-title">{sec.title}</h3>
            <p className="abcde-desc">{sec.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ABCDESection;