// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// function Contact() {
//   const [result, setResult] = useState("");

//   useEffect(() => {
//     if (result) {
//       alert(result);
//       setResult("");
//     }
//   }, [result]);


//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form);
//     formData.append("access_key", "634d35d2-c846-4b58-ad54-ec957ea66021");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("Form Submitted Successfully!");
//         form.reset();
//       } else {
//         setResult("Error: " + data.message);
//       }
//     } catch (error) {
//       console.error("Submission failed:", error);
//       setResult("Submission failed!");
//     }
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-black flex items-center justify-center px-6 py-12"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.div
//         className="w-full max-w-2xl bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//       >
//         <h1 className="text-4xl font-mono font-bold text-center text-white mb-4">
//           <code>Wanna collaborate with me?</code>
//         </h1>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <label className="block mb-2 text-white font-mono"><code>Name</code></label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               required
//               className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <label className="block mb-2 text-white font-mono"><code>Email</code></label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//               className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <label className="block mb-2 text-white font-mono"><code>Message</code></label>
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Write your message..."
//               required
//               className="w-full px-4 py-2 bg-black border border-gray-600 rounded-lg text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </motion.div>

//           <motion.button
//             type="submit"
//             className="w-full bg-cyan-500 text-black font-mono px-6 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:scale-105 transition-transform"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <code>Send</code>
//           </motion.button>
//         </form>

        
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Contact;


import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { FaPaperPlane, FaUser, FaEnvelope, FaMessage, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SiX } from "react-icons/si";

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote & Socials Entrance
      gsap.from(".quote-content", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.from(".social-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(2)",
        delay: 0.5
      });

      // Form entrance on scroll
      gsap.from(".form-container", {
        scrollTrigger: {
          trigger: ".form-container",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "634d35d2-c846-4b58-ad54-ec957ea66021");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message Sent Successfully!");
        form.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Submission failed!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 4000);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-white font-mono selection:bg-cyan-500/30">
      
      {/* Background Accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 space-y-32">
        
        {/* --- NEW: QUOTE & SOCIAL SECTION --- */}
        <section className="quote-content text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
              “CODE IS LIKE HUMOR. WHEN YOU HAVE TO <br className="hidden md:block" /> 
              <span className="text-cyan-500 italic text-4xl md:text-6xl uppercase">explain it,</span> IT’S BAD.”
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-sm italic">— Cory House</p>
          </div>

          <div className="flex justify-center items-center gap-8">
            {[
              { icon: <FaGithub />, link: "https://github.com/agarwal1771" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/manan-agarwal-5b290a256" },
              { icon: <SiX />, link: "https://x.com/MananAgarwal136" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/manan_agarwal06" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="social-icon text-2xl text-gray-400 hover:text-cyan-500 transition-colors"
                whileHover={{ y: -5, scale: 1.2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-20 bg-gradient-to-b from-cyan-500 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-600">Scroll to Message</span>
          </div>
        </section>

        {/* --- FORM SECTION --- */}
        <section className="form-container max-w-3xl mx-auto">
          <div className="bg-[#0d0d0d] border border-white/5 p-8 md:p-16 rounded-[2rem] shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-cyan-500"></span>
              GET IN TOUCH
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Manan Agarwal"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="hello@manan.dev"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="What are we building today?"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <div className="md:col-span-2 pt-6">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-white text-black py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-cyan-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group"
                >
                  {isSubmitting ? "Sending..." : "Send Transmission"}
                  <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </div>
            </form>

            <AnimatePresence>
              {result && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/95 rounded-[2rem] flex flex-col items-center justify-center text-center p-6 z-20"
                >
                  <div className="w-20 h-20 bg-cyan-500/20 text-cyan-500 rounded-full flex items-center justify-center text-4xl mb-6">✓</div>
                  <h4 className="text-2xl font-bold mb-2">Message Received</h4>
                  <p className="text-gray-400 mb-8">I'll get back to you within 24 hours.</p>
                  <button onClick={() => setResult("")} className="text-xs uppercase tracking-widest border-b border-cyan-500 pb-1">Send another?</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Contact;