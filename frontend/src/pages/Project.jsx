import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Project() {
  return (
    <motion.div 
      className="min-h-screen bg-black text-white font-mono px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-16 sm:pt-20 md:pt-28 space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="px-2 sm:px-4 md:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          My Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
          Here are some of the projects I've worked on:
        </p>

        {/* Project cards with animation */}
        <motion.div
          className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard
              title="Portfolio"
              description="A personal portfolio website."
              tech={['React', 'JavaScript']}
              link="https://manan-agarwal.vercel.app/"
            />
            </motion.div>

            <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
           <ProjectCard
              title="Connect"
              description="A chatting web application."
              tech={['React', 'JavaScript', 'Socket.io', 'MongoDB']}
              link="https://chatting-application-olive.vercel.app/"
            />
           </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
           <ProjectCard
              title="SystemCraft"
              description="A system design visualizer."
              tech={['React', 'JavaScript', 'OpenAI.API', 'MongoDB' , 'ReactFlow']}
              link="https://system-architect-psi.vercel.app/"
            />
           </motion.div>

          
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Project;
