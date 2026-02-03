// import React from 'react';
// import { motion } from 'framer-motion';
// import ProjectCard from './ProjectCard';

// function Project() {
//   return (
//     <motion.div 
//       className="min-h-screen bg-black text-white font-mono px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-16 sm:pt-20 md:pt-28 space-y-10"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <section className="px-2 sm:px-4 md:px-6">
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//           My Projects
//         </h2>
//         <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
//           Here are some of the projects I've worked on:
//         </p>

//         {/* Project cards with animation */}
//         <motion.div
//           className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.6 }}
//           >
//             <ProjectCard
//               title="Portfolio"
//               description="A personal portfolio website."
//               tech={['React', 'JavaScript']}
//               link="https://manan-agarwal-portfolio.vercel.app/"
//             />
//             </motion.div>

//             <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.6 }}
//           >
//            <ProjectCard
//               title="Connect"
//               description="A chatting web application."
//               tech={['React', 'JavaScript', 'Socket.io', 'MongoDB']}
//               link="https://chatting-application-olive.vercel.app/"
//             />
//            </motion.div>

//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ duration: 0.6 }}
//           >
//            <ProjectCard
//               title="SystemCraft"
//               description="A system design visualizer."
//               tech={['React', 'JavaScript', 'OpenAI.API', 'MongoDB' , 'ReactFlow']}
//               link="https://system-architect-psi.vercel.app/"
//             />
//            </motion.div>

          
//         </motion.div>
//       </section>
//     </motion.div>
//   );
// }

// export default Project;


import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import gsap from 'gsap';

const projects = [
  {
    title: "Portfolio",
    description: "A high-performance personal portfolio website built with modern animations.",
    tech: ['React', 'Framer Motion', 'GSAP'],
    link: "https://manan-agarwal-portfolio.vercel.app/",
  },
  {
    title: "Connect",
    description: "Real-time chatting application with persistent messaging and secure rooms.",
    tech: ['Socket.io', 'MongoDB', 'React', 'Express'],
    link: "https://chatting-application-olive.vercel.app/",
  },
  {
    title: "SystemCraft",
    description: "AI-powered system design visualizer with interactive canvas elements.",
    tech: ['ReactFlow', 'OpenAI', 'MongoDB', 'Node.js'],
    link: "https://system-architect-psi.vercel.app/",
  }
];

function Project() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title drops from top
      gsap.from(".project-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      // 2. Subtitle slides from left
      gsap.from(".project-subtitle", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });

      // 3. Cards pop in with a staggered scale effect
      gsap.from(".project-card-anim", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: "back.out(1.7)" // Adds a slight "bounce"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white font-mono px-6 md:px-20 lg:px-32 pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <section className="relative z-10">
        <header className="mb-16 space-y-4">
          <h2 className="project-title text-4xl md:text-6xl font-bold tracking-tighter">
            SELECTED <span className="text-cyan-500 italic">WORKS</span>
          </h2>
          <p className="project-subtitle text-gray-400 text-lg max-w-2xl border-l-2 border-cyan-500 pl-6">
            A collection of applications focusing on real-time data, AI integration, and scalable architecture.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="project-card-anim">
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
              >
                <div className="h-full bg-[#0d0d0d] border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-cyan-500/50 transition-colors group shadow-2xl relative overflow-hidden">
                  
                  {/* Background Icon */}
                  <div className="absolute -right-4 -bottom-4 text-white/5 text-9xl transform -rotate-12 group-hover:text-cyan-500/10 transition-colors">
                    <FaCode />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors italic uppercase">
                        {project.title}
                      </h3>
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:scale-125">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-cyan-500 hover:text-white flex items-center gap-2 group/link"
                    >
                      Launch App <span className="group-hover/link:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}export default Project;