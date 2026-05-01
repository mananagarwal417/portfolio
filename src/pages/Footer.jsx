// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-black text-white font-mono  bottom-0 z-50 px-6 md:px-32 py-6 mt-10">
//       <div className="container mx-auto px-6 md:px-16 lg:px-32 border-t border-gray-700 text-center pt-4">
//         <p className="text-xs sm:text-sm md:text-base">
//           <code>© 2025 Manan Agarwal. All rights reserved.</code>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { SiX } from "react-icons/si";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/agarwal1771" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/manan-agarwal-5b290a256" },
    { icon: <SiX />, link: "https://x.com/MananAgarwal136" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/manan_agarwal06" },
  ];

  return (
    <footer className="relative bg-[#050505] text-white font-mono py-12 px-6 md:px-20 lg:px-32 border-t border-white/5 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Brand/Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="text-xl font-bold tracking-tighter">
            MANAN<span className="text-cyan-500">.</span>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
            Built with Passion & React
          </p>
        </div>

        {/* Social Icons with Staggered Hover */}
        {/* <div className="flex items-center gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-xl text-gray-400 hover:text-cyan-500 transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div> */}

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-xs uppercase tracking-widest hover:border-cyan-500 transition-all"
        >
          Back to Top
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform text-cyan-500" />
        </motion.button>
      </div>

      {/* Copyright Line */}
      <div className="mt-12 text-center border-t border-white/5 pt-8">
        <p className="text-[10px] md:text-xs text-gray-600 tracking-widest uppercase">
          © 2026 Manan Agarwal — Crafted with <span className="text-red-600">❤</span> and code.
        </p>
      </div>
    </footer>
  );
}

export default Footer;