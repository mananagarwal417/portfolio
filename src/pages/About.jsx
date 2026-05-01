// import React from "react";
// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
// import { SiMongodb, SiTailwindcss, SiJavascript, SiAdobephotoshop } from "react-icons/si";
// import { FaProjectDiagram } from "react-icons/fa";
// import {  HiDownload } from "react-icons/hi";

// function About() {
//   return (
//     <motion.div 
//       className="min-h-screen bg-black text-white font-mono px-8 md:px-32 py-20 space-y-16"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
      
//       {/* Intro Section */}
//       <motion.section 
//         className="space-y-6 text-center md:text-left"
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           <code>About Me</code>
//         </h2>
//         <p className="text-gray-300 text-lg leading-relaxed">
//           <code>
//             I’m a Full-Stack Developer who loves building clean, modern, and
//             scalable web applications. I enjoy solving problems and turning
//             ideas into functional digital solutions.
//           </code>
//         </p>
//         <p className="text-gray-400 leading-relaxed">
//           <code>
//             When I’m not coding, you’ll find me exploring new technologies,
//             learning something creative, or contributing to projects that make
//             a real impact. I also enjoy drawing and playing chess in my free
//             time.
//           </code>
//         </p>
//       </motion.section>

//       {/* Skills Section */}
//       <motion.section
//         className="bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700"
//         initial={{ scale: 0.95, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3 className="text-2xl font-bold mb-12 text-center">
//           <code>My Skills</code>
//         </h3>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center space-y-10">
//           {[
//             { icon: <FaReact className="text-cyan-400 text-4xl" />, label: "React" },
//             { icon: <FaNodeJs className="text-green-500 text-4xl" />, label: "Node.js" },
//             { icon: <SiMongodb className="text-green-400 text-4xl" />, label: "MongoDB" },
//             { icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, label: "Tailwind" },
//             { icon: <SiJavascript className="text-yellow-400 text-4xl" />, label: "JavaScript" },
//             { icon: <FaDatabase className="text-gray-400 text-4xl" />, label: "Databases" },
//             { icon: <SiAdobephotoshop className="text-blue-400 text-4xl" />, label: "Photoshop" },
//             { icon: <FaProjectDiagram className="text-cyan-400 text-4xl" />, label: "System Design" }
//           ].map((skill, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center space-y-2"
//               initial={{ y: 10, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//             >
//               {skill.icon}
//               <code>{skill.label}</code>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Resume Download Section */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <div className="flex justify-center">
//           <a 
//             href="/Manan_Agarwal.pdf" 
//             download
//             className="flex justify-center items-center space-x-5 w-60 border-2 border-cyan-500 text-white px-6 py-3 rounded-lg font-mono font-bold hover:scale-105 transition-transform"
//           >
//             <code>Download Resume</code>
//             <HiDownload />
//           </a>
//         </div>
//       </motion.section>
//     </motion.div>
//   );
// }

// export default About;


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaTools , FaProjectDiagram } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiAdobephotoshop, SiExpress, SiGit, SiPostman } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { GiBrain } from "react-icons/gi";
import { HiPencilAlt } from "react-icons/hi";


gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from(".about-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Reveal Skill Categories one by one
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const SkillBadge = ({ icon, label }) => (
    <motion.div 
      whileHover={{ scale: 1.1, color: "#06b6d4" }}
      className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm"
    >
      {icon} <span>{label}</span>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white font-mono selection:bg-cyan-500/30">
      
      {/* Background Decorative Element */}
      <div className="fixed top-20 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 py-24 space-y-24 relative z-10">
        
        {/* --- INTRO SECTION --- */}
        {/* --- INTRO SECTION --- */}
<header className="about-header space-y-8 max-w-3xl">
  <div className="inline-block px-3 py-1 border border-cyan-500/50 text-cyan-500 text-xs uppercase tracking-widest rounded-md">
    Developer Profile
  </div>
  
  <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
    I solve <span className="text-cyan-500">problems</span> through code.
  </h1>

  {/* Typewriter Paragraph */}
  <div className="text-gray-300 text-lg md:text-xl leading-relaxed min-h-[150px]">
    <code>
      <Typewriter
        options={{
          delay: 25,
          cursor: "█", // Solid block cursor for a more "terminal" feel
          autoStart: true,
          loop: false,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("I’m a Full-Stack Developer who loves building clean, modern, and scalable web applications.")
            .pauseFor(500)
            .typeString("<br /><br />I enjoy solving problems and turning ideas into functional digital solutions.")
            .start();
        }}
      />
    </code>
  </div>
</header>

        {/* --- SKILLS DASHBOARD --- */}
        <section className="skills-container space-y-12">
  <h2 className="text-2xl font-bold flex items-center gap-4">
    <span className="w-12 h-[1px] bg-cyan-500"></span> Technical Stack
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    
    {/* Frontend Card */}
    <div className="skill-card group p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-cyan-500/50 transition-colors">
      <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 text-cyan-500 text-2xl">
        <FaCode />
      </div>
      <h3 className="text-xl font-bold mb-6">Frontend</h3>
      <div className="flex flex-wrap gap-3">
        <SkillBadge icon={<FaReact className="text-cyan-400" />} label="React" />
        <SkillBadge icon={<SiJavascript className="text-yellow-400" />} label="JavaScript" />
        <SkillBadge icon={<SiTailwindcss className="text-cyan-500" />} label="Tailwind" />
        <SkillBadge icon={<SiAdobephotoshop className="text-blue-500" />} label="Photoshop" />
      </div>
    </div>

    {/* Backend Card */}
    <div className="skill-card group p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-green-500/50 transition-colors">
      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 text-green-500 text-2xl">
        <FaServer />
      </div>
      <h3 className="text-xl font-bold mb-6">Backend</h3>
      <div className="flex flex-wrap gap-3">
        <SkillBadge icon={<FaNodeJs className="text-green-500" />} label="Node.js" />
        <SkillBadge icon={<SiExpress className="text-white" />} label="Express" />
        <SkillBadge icon={<SiMongodb className="text-green-400" />} label="MongoDB" />
        <SkillBadge icon={<FaDatabase className="text-blue-400" />} label="SQL" />
      </div>
    </div>

    {/* CS Fundamentals Card - Added OS, DBMS, Networking, and DSA */}
    <div className="skill-card group p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-red-500/50 transition-colors">
      <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-500 text-2xl">
        <FaDatabase />
      </div>
      <h3 className="text-xl font-bold mb-6">CS Fundamentals</h3>
      <div className="flex flex-wrap gap-3">
        <SkillBadge icon={<FaServer className="text-red-400" />} label="Operating Systems" />
        <SkillBadge icon={<FaDatabase className="text-orange-400" />} label="DBMS" />
        <SkillBadge icon={<FaProjectDiagram className="text-blue-400" />} label="Computer Networks" />
        {/* <SkillBadge icon={<SiJavascript className="text-yellow-500" />} label="DSA" /> */}
        {/* <SkillBadge icon={<GiBrain className="text-pink-400" />} label="DSA" /> */}
        <SkillBadge icon={<HiPencilAlt className="text-yellow-600" />} label="DSA" />
      </div>
    </div>

    {/* Core & Tools Card */}
    <div className="skill-card group p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-purple-500/50 transition-colors">
      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-500 text-2xl">
        <FaTools />
      </div>
      <h3 className="text-xl font-bold mb-6">Core & Tools</h3>
      <div className="flex flex-wrap gap-3">
        <SkillBadge icon={<SiGit className="text-orange-500" />} label="Git" />
        <SkillBadge icon={<SiPostman className="text-orange-400" />} label="Postman" />
        <SkillBadge icon={<FaCode className="text-cyan-400" />} label="System Design" />
        <SkillBadge icon={<FaTools className="text-gray-400" />} label="REST APIs" />
      </div>
    </div>

  </div>
</section>

        {/* --- RESUME ACTION --- */}
        <motion.section 
          className="flex flex-col items-center py-20 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 mb-8 text-center max-w-sm">
            Interested in the full breakdown? Grab a copy of my professional resume below.
          </p>
          <motion.a 
            href="/Manan_Agarwal.pdf" 
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 bg-cyan-500 text-black px-10 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            <span>Download Resume</span>
            <HiDownload className="text-xl group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </motion.section>

      </div>
    </div>
  );
}

export default About;