// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-black text-white font-mono sticky top-0 z-50 px-6 md:px-32">
//       <nav className="flex items-center justify-between px-4 py-4 border-b border-gray-700 box-border">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <code>Manan Agarwal</code>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden min-[901px]:flex space-x-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-black font-semibold bg-cyan-500 border border-cyan-500 px-3 py-1 rounded"
//                 : "text-white border border-transparent hover:border hover:border-cyan-500 px-3 py-1 rounded transition"
//             }
//           >
//             <code>Home</code>
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-black font-semibold bg-cyan-500 border border-cyan-500 px-3 py-1 rounded"
//                 : "text-white border border-transparent hover:border hover:border-cyan-500 px-3 py-1 rounded transition"
//             }
//           >
//             <code>About</code>
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-black font-semibold bg-cyan-500 border border-cyan-500 px-3 py-1 rounded"
//                 : "text-white border border-transparent hover:border hover:border-cyan-500 px-3 py-1 rounded transition"
//             }
//           >
//             <code>Projects</code>
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-black font-semibold bg-cyan-500 border border-cyan-500 px-3 py-1 rounded"
//                 : "text-white border border-transparent hover:border hover:border-cyan-500 px-3 py-1 rounded transition"
//             }
//           >
//             <code>Contact Me</code>
//           </NavLink>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="min-[901px]:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="min-[901px]:hidden flex flex-col items-center bg-gray-900 border-t border-gray-700 py-4 space-y-4">
//           <NavLink
//             to="/"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-black font-semibold bg-cyan-500 px-3 py-1 rounded w-full text-center"
//                 : "text-white hover:bg-cyan-500 px-3 py-1 rounded transition w-full text-center"
//             }
//           >
//             <code>Home</code>
//           </NavLink>
//           <NavLink
//             to="/about"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-black font-semibold bg-cyan-500 px-3 py-1 rounded w-full text-center"
//                 : "text-white hover:bg-cyan-500 px-3 py-1 rounded transition w-full text-center"
//             }
//           >
//             <code>About</code>
//           </NavLink>
//           <NavLink
//             to="/projects"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-black font-semibold bg-cyan-500 px-3 py-1 rounded w-full text-center"
//                 : "text-white hover:bg-cyan-500 px-3 py-1 rounded transition w-full text-center"
//             }
//           >
//             <code>Projects</code>
//           </NavLink>
//           <NavLink
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               isActive
//                 ? "text-black font-semibold bg-cyan-500 px-3 py-1 rounded w-full text-center"
//                 : "text-white hover:bg-cyan-500 px-3 py-1 rounded transition w-full text-center"
//             }
//           >
//             <code>Contact Me</code>
//           </NavLink>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6"; // More modern icon
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 px-6 md:px-20 lg:px-32 ${
        scrolled ? "py-4 bg-black/80 backdrop-blur-lg border-b border-white/10" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between font-mono">
        
        {/* Logo with Glow Effect */}
        <NavLink to="/" className="relative group">
          <div className="text-xl md:text-2xl font-bold tracking-tighter text-white">
            MANAN<span className="text-cyan-500">.</span>
          </div>
          <motion.div 
            className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 group-hover:w-full transition-all duration-300"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm uppercase tracking-widest transition-colors ${
                  isActive ? "text-cyan-500" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <code>{link.title}</code>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:text-cyan-500 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBarsStaggered size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 h-screen bg-black z-[110] flex flex-col items-center justify-center space-y-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-2"
            >
              <FaTimes size={30} />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-bold uppercase tracking-tighter ${
                      isActive ? "text-cyan-500" : "text-white"
                    }`
                  }
                >
                  <code>{link.title}</code>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;