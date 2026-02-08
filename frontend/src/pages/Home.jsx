// import React from "react";
// import { NavLink } from "react-router-dom";
// import image from "../assets/me.jpg";
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { SiX } from "react-icons/si";
// import { motion } from "framer-motion"; // ✅ Import Framer Motion

// function Home() {
//   return (
//     <>
//       <div className="min-h-screen bg-black text-white font-mono px-6 sm:px-10 md:px-20 lg:px-32 pt-20 md:pt-28 space-y-20">

//         {/* Hero Section */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* About Section */}
//           <section>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
//               <code>Hi, I’m Manan — Full-Stack Developer</code>
//             </h2>
//             <p className="text-base sm:text-lg leading-relaxed mb-8">
//               <code>
//                 I build fast, simple, and modern web apps that look great and
//                 work smoothly.
//               </code>
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//                 <NavLink
//                   to="/projects"
//                   className="bg-cyan-500 text-black px-5 sm:px-6 py-3 rounded-lg font-mono font-bold hover:bg-cyan-400 transition-colors"
//                 >
//                   <code>View my Projects</code>
//                 </NavLink>
//               </motion.div>
//             </div>
//           </section>

//           {/* Image Section */}
//           <motion.section
//             className="flex justify-center"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.img
//               src={image}
//               alt="photo of me"
//               className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg border-2 border-white"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.section>
//         </motion.div>

//         {/* Who am I Section */}
//         <motion.div
//           className="px-2 sm:px-6 md:px-10 py-10 md:py-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <section>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
//               <code>Who am I?</code>
//             </h2>
//             <p className="text-base sm:text-lg leading-relaxed mb-8">
//               <code>
//                 I am a passionate web developer with experience in building
//                 modern web applications using React, Tailwind CSS, and other
//                 cutting-edge technologies.
//               </code>
//             </p>
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <NavLink
//                 to="/about"
//                 className="inline-block border-2 border-cyan-500 text-white px-5 sm:px-6 py-3 rounded-lg font-mono font-bold transition-transform"
//               >
//                 <code>Read More</code>
//               </NavLink>
//             </motion.div>
//           </section>
//         </motion.div>

//         {/* Contact Section */}
//         <motion.div
//           className="px-2 sm:px-6 md:px-10 py-10 md:py-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <section>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
//               <code>Want to work with me?</code>
//             </h2>
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <NavLink
//                 to="/contact"
//                 className="inline-block bg-cyan-500 text-black px-5 sm:px-6 py-3 rounded-lg font-mono font-bold hover:bg-cyan-400 transition-transform"
//               >
//                 <code>Contact Me</code>
//               </NavLink>
//             </motion.div>
//           </section>
//         </motion.div>

//         {/* Social Links */}
//         <motion.div
//           className="pt-10 md:pt-16 flex justify-center space-x-6 text-xl sm:text-2xl text-white relative bottom-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           <motion.a
//             href="https://github.com/agarwal1771"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             transition={{ duration: 0.2 }}
//             className="hover:text-cyan-400 transition"
//           >
//             <FaGithub />
//           </motion.a>
//           <motion.a
//             href="https://www.linkedin.com/in/manan-agarwal-5b290a256"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             transition={{ duration: 0.2 }}
//             className="hover:text-cyan-400 transition"
//           >
//             <FaLinkedin />
//           </motion.a>
//           <motion.a
//             href="https://x.com/MananAgarwal136?t=h4_UWcun29B3ZfIstlsN6w&s=09"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             transition={{ duration: 0.2 }}
//             className="hover:text-cyan-400 transition"
//           >
//             <SiX />
//           </motion.a>
//           <motion.a
//             href="https://www.instagram.com/manan_agarwal06?igsh=aWF0anE4NzA4MDB1"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             transition={{ duration: 0.2 }}
//             className="hover:text-cyan-400 transition"
//           >
//             <FaInstagram />
//           </motion.a>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// export default Home;

// import React, { useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import image from "../assets/me2.jpeg";
// import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaRocket, FaDatabase,FaChevronDown } from "react-icons/fa";
// import { SiX, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb,SiExpress, SiGit, SiPostman } from "react-icons/si";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion, AnimatePresence } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// function Home() {
//   const mainContainer = useRef(null);
//   const heroRef = useRef(null);
//   const codeBlockRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Initial Hero Animation (Fade in from sides)
//       gsap.from(".hero-text", {
//         x: -100,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power4.out",
//       });

//       gsap.from(".hero-image", {
//         x: 100,
//         opacity: 0,
//         duration: 1.2,
//         ease: "power4.out",
//       });

//       // 2. Scroll Animations for Sections
//       const sections = gsap.utils.toArray(".scroll-section");
//       sections.forEach((section) => {
//         gsap.from(section, {
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//         });
//       });

//       // 3. Floating effect for the code block
//       gsap.to(codeBlockRef.current, {
//         y: 15,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });
//     }, mainContainer);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={mainContainer} className="min-h-screen bg-[#050505] text-white font-mono selection:bg-cyan-500/30 overflow-x-hidden">
      
//       {/* Background Glows */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full" />
//         <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-900/10 blur-[150px] rounded-full" />
//       </div>

//       <div className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-40 pt-32 space-y-40 pb-20">
        
//         {/* --- SECTION 1: HERO --- */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
//           <div className="hero-text space-y-8">
//             <div ref={codeBlockRef} className="relative group inline-block w-full max-w-md">
//               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20" />
//               <div className="relative bg-[#0d0d0d] border border-white/10 p-6 rounded-xl shadow-2xl">
//                 <div className="flex gap-2 mb-4">
//                   <div className="w-3 h-3 rounded-full bg-red-500" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                   <div className="w-3 h-3 rounded-full bg-green-500" />
//                 </div>
//                 <code className="text-sm md:text-base leading-7">
//                   <span className="text-purple-400">class</span> <span className="text-yellow-300">Engineer</span> {"{"} <br />
//                   &nbsp;&nbsp;name = <span className="text-green-400">'Manan'</span>;<br />
//                   &nbsp;&nbsp;role = <span className="text-green-400">'Full-Stack Developer'</span>;<br />
//                   &nbsp;&nbsp;status = <span className="text-green-400">'Available_to_Build'</span>;<br />
//                   {"}"}
//                 </code>
//               </div>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
//               Pushing <span className="text-cyan-500 italic">Limits</span> <br /> 
//               With Code.
//             </h1>
//             <p className="text-gray-400 text-lg max-w-lg">
//               I transform complex ideas into sleek, high-performance web applications. 
//               Focused on user experience and scalable architecture.
//             </p>
//             <div className="flex gap-6">
//               <NavLink to="/projects" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300">
//                 View Work
//               </NavLink>
//             </div>
//           </div>

//           <div className="hero-image flex justify-center lg:justify-end">
//             <div className="relative">
//               <div className="absolute inset-0 bg-cyan-500 rounded-3xl rotate-6 opacity-10" />
//               <img 
//                 src={image} 
//                 alt="Manan" 
//                 className="relative w-72 h-96 md:w-80 md:h-[450px] object-cover rounded-3xl border border-white/10 shadow-2xl" 
//               />
//             </div>
//           </div>
//         </section>

//         {/* --- SECTION 2: THE TECH STACK (Makes the page longer) --- */}
//         {/* --- MY ARSENAL SECTION --- */}
//          {/* --- MY ARSENAL SECTION --- */}
// <section className="scroll-section py-20 px-4 md:px-0">
//   {(() => {
//     // 1. Setup the state (Make sure to move this 'useState' to the top of your component if you get an error)
//     const [showSkills, setShowSkills] = React.useState(false);

//     const skills = [
//       { name: "React", icon: <SiReact className="text-cyan-400" /> },
//       { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//       { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
//       { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
//       { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//       { name: "Express", icon: <SiExpress className="text-white" /> },
//       { name: "Git", icon: <SiGit className="text-orange-500" /> },
//       { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
//     ];

//     return (
//       <>
//         <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-white/10 pb-6 gap-6">
//           <h2 className="text-3xl font-bold flex items-center gap-4">
//             <FaCode className="text-cyan-500" /> My Arsenal
//           </h2>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setShowSkills(!showSkills)}
//             className="flex items-center gap-3 bg-cyan-500 text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
//           >
//             {showSkills ? "Collapse Stack" : "Initialize Tech Stack"}
//             <motion.span animate={{ rotate: showSkills ? 180 : 0 }}>
//               <FaChevronDown />
//             </motion.span>
//           </motion.button>
//         </div>

//         <div className="relative min-h-[120px]">
//           <AnimatePresence>
//             {showSkills && (
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 exit="hidden"
//                 variants={{
//                   visible: { transition: { staggerChildren: 0.1 } }
//                 }}
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
//               >
//                 {skills.map((skill, i) => (
//                   <motion.div
//                     key={i}
//                     variants={{
//                       hidden: { opacity: 0, scale: 0.8, y: 20 },
//                       visible: { opacity: 1, scale: 1, y: 0 }
//                     }}
//                     transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                     className="group p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col items-center gap-4 hover:border-cyan-500/50 transition-all duration-300"
//                   >
//                     <div className="text-5xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
//                       {skill.icon}
//                     </div>
//                     <span className="font-bold uppercase tracking-widest text-[10px] text-gray-500 group-hover:text-white transition-colors">
//                       {skill.name}
//                     </span>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {!showSkills && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="py-10 text-center border-2 border-dashed border-white/5 rounded-2xl"
//             >
//               <p className="text-gray-600 italic font-mono text-sm">
//                 // System ready. Click button to decrypt technical profile...
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </>
//     );
//   })()}
// </section>
//         {/* --- SECTION 3: SERVICES / WHAT I DO --- */}
//         <section className="scroll-section grid grid-cols-1 md:grid-cols-3 gap-10">
//           <div className="space-y-4">
//             <FaRocket className="text-cyan-500 text-3xl" />
//             <h3 className="text-xl font-bold">Frontend Mastery</h3>
//             <p className="text-gray-500 text-sm">Building ultra-fast, responsive interfaces using React and modern CSS frameworks.</p>
//           </div>
//           <div className="space-y-4">
//             <FaDatabase className="text-purple-500 text-3xl" />
//             <h3 className="text-xl font-bold">Backend Logic</h3>
//             <p className="text-gray-500 text-sm">Designing robust APIs and database schemas to power data-heavy applications.</p>
//           </div>
//           <div className="space-y-4">
//             <FaCode className="text-blue-500 text-3xl" />
//             <h3 className="text-xl font-bold">Clean Code</h3>
//             <p className="text-gray-500 text-sm">Writing maintainable, well-documented code that follows industry best practices.</p>
//           </div>
//         </section>

//         {/* --- SECTION 4: FOOTER/SOCIAL --- */}
//         <section className="scroll-section border-t border-white/10 pt-20 pb-10 flex flex-col items-center space-y-10">
//           <h2 className="text-4xl font-bold text-center">Let’s build something <br/> legendary.</h2>
//           <NavLink to="/contact" className="text-cyan-500 text-xl border-b border-cyan-500 pb-2 hover:text-white hover:border-white transition-all">
//             Get in touch
//           </NavLink>
//           <div className="flex gap-8 text-2xl text-gray-500">
//             <a href="https://github.com/agarwal1771" className="hover:text-white transition-colors"><FaGithub /></a>
//             <a href="https://linkedin.com/in/manan-agarwal-5b290a256" className="hover:text-white transition-colors"><FaLinkedin /></a>
//             <a href="https://x.com/MananAgarwal136" className="hover:text-white transition-colors"><SiX /></a>
//             <a href="https://instagram.com/manan_agarwal06" className="hover:text-white transition-colors"><FaInstagram /></a>
//           </div>
//           <p className="text-xs text-gray-600">© 2026 MANAN AGARWAL. ALL RIGHTS RESERVED.</p>
//         </section>

//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/me3.png";
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaRocket, FaDatabase, FaChevronDown } from "react-icons/fa";
import { SiX, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiGit, SiPostman } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const mainContainer = useRef(null);
  const codeBlockRef = useRef(null);

  // --- UPDATED CODE BOUNDARY: STATE FOR INTERACTIVE REVEAL ---
  const [hoveredSide, setHoveredSide] = useState(null);
  // --- END UPDATED CODE BOUNDARY ---

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", { x: -100, opacity: 0, duration: 1.2, ease: "power4.out" });
      gsap.from(".hero-image", { x: 100, opacity: 0, duration: 1.2, ease: "power4.out" });

      const sections = gsap.utils.toArray(".scroll-section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: { trigger: section, start: "top 80%", toggleActions: "play none none none" },
          y: 50, opacity: 0, duration: 1, ease: "power3.out",
        });
      });

      gsap.to(codeBlockRef.current, { y: 15, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, mainContainer);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainContainer} className="min-h-screen bg-[#050505] text-white font-mono selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-900/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 px-6 sm:px-10 md:px-20 lg:px-40 pt-32 space-y-40 pb-20">
        
        {/* --- SECTION 1: HERO --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          <div className="hero-text space-y-8">
            <div ref={codeBlockRef} className="relative group inline-block w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20" />
              <div className="relative bg-[#0d0d0d] border border-white/10 p-6 rounded-xl shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <code className="text-sm md:text-base leading-7">
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">Engineer</span> {"{"} <br />
                  &nbsp;&nbsp;name = <span className="text-green-400">'Manan'</span>;<br />
                  &nbsp;&nbsp;role = <span className="text-green-400">'Full-Stack Developer'</span>;<br />
                  &nbsp;&nbsp;status = <span className="text-green-400">'Available_to_Build'</span>;<br />
                  {"}"}
                </code>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Pushing <span className="text-cyan-500 italic">Limits</span> <br /> 
              With Code.
            </h1>
            <p className="text-gray-400 text-lg max-w-lg">
              I transform complex ideas into sleek, high-performance web applications. 
            </p>
            <div className="flex gap-6">
              <NavLink to="/projects" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Work
              </NavLink>
            </div>
          </div>

          <div className="hero-image flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-3xl rotate-6 opacity-10" />
              <img src={image} alt="Manan" className="relative w-72 h-96 md:w-80 md:h-[450px] object-cover rounded-3xl border border-white/10 shadow-2xl" />
            </div>
          </div>
        </section>

        {/* --- UPDATED CODE BOUNDARY: SCREENSHOT-INSPIRED SPLIT REVEAL --- */}
        <section className="scroll-section relative h-[600px] w-full hidden md:flex items-stretch overflow-hidden bg-black border-y border-white/5">
          
          {/* Interaction Zones */}
          <div onMouseEnter={() => setHoveredSide('left')} onMouseLeave={() => setHoveredSide(null)} className="absolute inset-y-0 left-0 w-1/2 z-50 cursor-pointer" />
          <div onMouseEnter={() => setHoveredSide('right')} onMouseLeave={() => setHoveredSide(null)} className="absolute inset-y-0 right-0 w-1/2 z-50 cursor-pointer" />

          {/* STATIONARY BACKGROUND CONTENT */}
          <div className="absolute inset-0 flex items-center pointer-events-none z-10">
            {/* Designer Content (Left Half) */}
            <div className={`w-1/2 flex flex-col items-center px-10 transition-all duration-700 ease-in-out ${hoveredSide === 'right' ? 'opacity-0 scale-90 -translate-x-10' : 'opacity-100 scale-100'}`}>
              <h2 className="text-7xl font-black tracking-tighter text-white uppercase mb-4">designer</h2>
              <p className="text-zinc-500 text-center max-w-xs text-sm leading-relaxed">
                Product designer specialising in UI design and design systems.
              </p>
              {/* Optional artistic background element like the screenshot */}
              <div className="absolute -z-10 opacity-20 blur-2xl w-64 h-64 bg-cyan-500/20 rounded-full" />
            </div>

            {/* Coder Content (Right Half) */}
            <div className={`w-1/2 flex flex-col items-center px-10 transition-all duration-700 ease-in-out ${hoveredSide === 'left' ? 'opacity-0 scale-90 translate-x-10' : 'opacity-100 scale-100'}`}>
              <h2 className="text-7xl font-black tracking-tighter text-white uppercase mb-4">&lt;coder&gt;</h2>
              <p className="text-zinc-500 text-center max-w-xs text-sm leading-relaxed">
                Full stack developer who writes clean, elegant and efficient code.
              </p>
              {/* Optional technical background element like the screenshot */}
              <div className="absolute -z-10 opacity-10 font-mono text-[10px] whitespace-pre text-white/50">
                {`<div>\n  <span>\n    <h1>Build</h1>\n  </span>\n</div>`}
              </div>
            </div>
          </div>

          {/* REVEALING PANELS (Shutters) */}
          <motion.div 
            animate={{ width: hoveredSide === 'left' ? '85%' : hoveredSide === 'right' ? '15%' : '50%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute left-0 top-0 h-full bg-zinc-900/5 border-r border-white/10 z-20"
          />
          <motion.div 
            animate={{ width: hoveredSide === 'right' ? '85%' : hoveredSide === 'left' ? '15%' : '50%' }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute right-0 top-0 h-full bg-zinc-900/5 border-l border-white/10 z-20"
          />

          {/* SLIDING CENTRAL PHOTO */}
          <motion.div 
            animate={{ 
              x: hoveredSide === 'left' ? 60 : hoveredSide === 'right' ? -60 : 0 
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="absolute inset-0 flex justify-center items-center pointer-events-none z-40"
          >
            <div className="relative w-[450px] h-[550px] group">
              {/* Base Greyscale Image */}
              <img src={image} className="w-full h-full object-cover grayscale opacity-40 transition-opacity duration-500" alt="Manan Base" />

              {/* Reveal: Left Half (Designer Color) */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'}`}
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              >
                <img src={image} className="w-full h-full object-cover" alt="Manan Left" />
                <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay" />
              </div>

              {/* Reveal: Right Half (Coder Color) */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 ${hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'}`}
                style={{ clipPath: 'inset(0 0 0 50%)' }}
              >
                <img src={image} className="w-full h-full object-cover" alt="Manan Right" />
                <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay" />
              </div>
            </div>
          </motion.div>
        </section>
        {/* --- END UPDATED CODE BOUNDARY --- */}

        {/* --- SECTION 2: THE TECH STACK --- */}
        <section className="scroll-section py-20 px-4 md:px-0">
          {(() => {
            const [showSkills, setShowSkills] = React.useState(false);
            const skills = [
              { name: "React", icon: <SiReact className="text-cyan-400" /> },
              { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
              { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
              { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
              { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
              { name: "Express", icon: <SiExpress className="text-white" /> },
              { name: "Git", icon: <SiGit className="text-orange-500" /> },
              { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
            ];

            return (
              <>
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-white/10 pb-6 gap-6">
                  <h2 className="text-3xl font-bold flex items-center gap-4">
                    <FaCode className="text-cyan-500" /> My Arsenal
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSkills(!showSkills)}
                    className="flex items-center gap-3 bg-cyan-500 text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs"
                  >
                    {showSkills ? "Collapse Stack" : "Initialize Tech Stack"}
                    <motion.span animate={{ rotate: showSkills ? 180 : 0 }}><FaChevronDown /></motion.span>
                  </motion.button>
                </div>

                <div className="relative min-h-[120px]">
                  <AnimatePresence>
                    {showSkills && (
                      <motion.div
                        initial="hidden" animate="visible" exit="hidden"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                      >
                        {skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="group p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col items-center gap-4 hover:border-cyan-500/50 transition-all duration-300"
                          >
                            <div className="text-5xl">{skill.icon}</div>
                            <span className="font-bold uppercase tracking-widest text-[10px] text-gray-500 group-hover:text-white">{skill.name}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!showSkills && (
                    <div className="py-10 text-center border-2 border-dashed border-white/5 rounded-2xl">
                      <p className="text-gray-600 italic font-mono text-sm">// System ready. Click to decrypt profile...</p>
                    </div>
                  )}
                </div>
              </>
            );
          })()}
        </section>

        {/* --- SECTION 3: SERVICES --- */}
        <section className="scroll-section grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <FaRocket className="text-cyan-500 text-3xl" />
            <h3 className="text-xl font-bold">Frontend Mastery</h3>
            <p className="text-gray-500 text-sm">Building ultra-fast, responsive interfaces.</p>
          </div>
          <div className="space-y-4">
            <FaDatabase className="text-purple-500 text-3xl" />
            <h3 className="text-xl font-bold">Backend Logic</h3>
            <p className="text-gray-500 text-sm">Designing robust APIs and database schemas.</p>
          </div>
          <div className="space-y-4">
            <FaCode className="text-blue-500 text-3xl" />
            <h3 className="text-xl font-bold">Clean Code</h3>
            <p className="text-gray-500 text-sm">Writing maintainable, well-documented code.</p>
          </div>
        </section>

        {/* --- SECTION 4: FOOTER --- */}
        <section className="scroll-section border-t border-white/10 pt-20 pb-10 flex flex-col items-center space-y-10">
          <h2 className="text-4xl font-bold text-center">Let’s build something <br/> legendary.</h2>
          <NavLink to="/contact" className="text-cyan-500 text-xl border-b border-cyan-500 pb-2 hover:text-white transition-all">Get in touch</NavLink>
          <div className="flex gap-8 text-2xl text-gray-500">
            <a href="https://github.com/agarwal1771" className="hover:text-white transition-colors"><FaGithub /></a>
            <a href="https://linkedin.com/in/manan-agarwal-5b290a256" className="hover:text-white transition-colors"><FaLinkedin /></a>
          </div>
          <p className="text-xs text-gray-600">© 2026 MANAN AGARWAL. ALL RIGHTS RESERVED.</p>
        </section>

      </div>
    </div>
  );
}

export default Home;