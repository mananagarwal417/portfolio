import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HiOutlinePhotograph } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dbms from "../assets/certs/dbms.jpg";
import cpp from "../assets/certs/cpp.jpg";
import l1 from "../assets/badges/l1.png";
import l2 from "../assets/badges/l2.png";

gsap.registerPlugin(ScrollTrigger);

function Certifications() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".cert-card", {
        scrollTrigger: {
          trigger: ".certs-container",
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const certs = [
    {
      title: "Database Management Systems",
      issuer: "Codechef",
      image: dbms,
      tags: ["SQL"],
    },
    {
      title: "c++ Programming",
      issuer: "Codechef",
      image: cpp,
      tags: ["C++", "Data Structures", "Algorithms"],
    },
  ];

  const badge = [
    {
      name: "50 Days Badge 2025",
      date: "2025",
      image: l1,
    },
    {
      name: "100 Days Badge 2025",
      date: "Current",
      image: l2,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white font-mono selection:bg-cyan-500/30"
    >
      <div className="fixed top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 py-24 space-y-20 relative z-10">
        <header className="cert-header space-y-6 max-w-3xl">
          <div className="inline-block px-3 py-1 border border-purple-500/50 text-purple-500 text-xs uppercase tracking-widest rounded-md">
            Achievements
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Verified <span className="text-cyan-500">Skills</span> & Badges.
          </h1>
          <p className="text-gray-400 text-lg">
            A collection of professional certifications and courses that I have
            completed.
          </p>
        </header>

        {/* --- PHOTO GRID PART 1 --- */}
        <section className="certs-container grid grid-cols-1 md:grid-cols-2 gap-10">
          {certs.map((cert, index) => (
            <CertCard key={index} cert={cert} />
          ))}
        </section>

        {/* --- LEETCODE HORIZONTAL BREAK --- */}
        <section className="leetcode-section py-10">
          <div className="bg-[#0a0a0a] border-y border-white/5 md:border md:rounded-3xl p-10 md:p-16 relative overflow-hidden">
            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -z-10" />

            {/* 1. Header Row (Full Width) */}
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
              <div className="flex items-center gap-3 text-yellow-500">
                <SiLeetcode className="text-4xl" />
                <span className="text-sm font-bold tracking-[0.3em] uppercase">
                  Coding Mastery
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold italic tracking-tighter">
                LeetCode Achievements
              </h2>
              <p className="text-gray-500 max-w-lg text-lg">
                Consistent problem solving and competitive programming
                milestones on the world's leading coding platform.
              </p>
            </div>

            {/* 2. Badges Row (Large Size Below Header) */}
            <div className="flex flex-wrap justify-center gap-16 md:gap-24">
              {badge.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -15, 0] }} // Floating animation
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Badge Container - Increased Size */}
                  <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
                    {/* Pulsing Glow Background */}
                    <div className="absolute inset-0 bg-yellow-500/10 blur-[60px] rounded-full group-hover:bg-yellow-500/20 transition-all duration-700" />

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(234,179,8,0.4)] group-hover:drop-shadow-[0_0_50px_rgba(234,179,8,0.7)] transition-all duration-500"
                    />
                  </div>

                  {/* Label under the badge */}
                  <span className="mt-8 text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.4em] group-hover:text-yellow-500 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-gray-600 mt-2 tracking-widest">
                    {item.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PHOTO GRID PART 2 (Continuing Certifications) --- */}
        <section className="certs-container grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Add more <CertCard cert={...} /> here as you get them */}
        </section>
      </div>
    </div>
  );
}

// THE SUB-COMPONENT DEFINED OUTSIDE
const CertCard = ({ cert }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="cert-card group bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-white/5 flex items-center justify-center">
      {cert.image ? (
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
      ) : (
        <HiOutlinePhotograph className="text-4xl text-white/10" />
      )}
    </div>
    <div className="p-8 space-y-4 text-left">
      <div>
        <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors uppercase">
          {cert.title}
        </h3>
        <p className="text-gray-500 text-sm mt-1">{cert.issuer}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {cert.tags.map((tag, i) => (
          <span
            key={i}
            className="text-[10px] tracking-widest border border-white/10 px-2 py-1 text-gray-400 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Certifications;
