import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiAdobephotoshop } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import {  HiDownload } from "react-icons/hi";

function About() {
  return (
    <motion.div 
      className="min-h-screen bg-black text-white font-mono px-8 md:px-32 py-20 space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      {/* Intro Section */}
      <motion.section 
        className="space-y-6 text-center md:text-left"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <code>About Me</code>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          <code>
            I’m a Full-Stack Developer who loves building clean, modern, and
            scalable web applications. I enjoy solving problems and turning
            ideas into functional digital solutions.
          </code>
        </p>
        <p className="text-gray-400 leading-relaxed">
          <code>
            When I’m not coding, you’ll find me exploring new technologies,
            learning something creative, or contributing to projects that make
            a real impact. I also enjoy drawing and playing chess in my free
            time.
          </code>
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-12 text-center">
          <code>My Skills</code>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center space-y-10">
          {[
            { icon: <FaReact className="text-cyan-400 text-4xl" />, label: "React" },
            { icon: <FaNodeJs className="text-green-500 text-4xl" />, label: "Node.js" },
            { icon: <SiMongodb className="text-green-400 text-4xl" />, label: "MongoDB" },
            { icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, label: "Tailwind" },
            { icon: <SiJavascript className="text-yellow-400 text-4xl" />, label: "JavaScript" },
            { icon: <FaDatabase className="text-gray-400 text-4xl" />, label: "Databases" },
            { icon: <SiAdobephotoshop className="text-blue-400 text-4xl" />, label: "Photoshop" },
            { icon: <FaProjectDiagram className="text-cyan-400 text-4xl" />, label: "System Design" }
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {skill.icon}
              <code>{skill.label}</code>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Resume Download Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex justify-center">
          <a 
            href="/Manan_Agarwal.pdf" 
            download
            className="flex justify-center items-center space-x-5 w-60 border-2 border-cyan-500 text-white px-6 py-3 rounded-lg font-mono font-bold hover:scale-105 transition-transform"
          >
            <code>Download Resume</code>
            <HiDownload />
          </a>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default About;
