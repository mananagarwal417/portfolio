// import React from "react";

// function ProjectCard(props) {
//   return (
//     <div className="w-full min-w-[280px] max-w-sm bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 flex flex-col justify-between hover:scale-105 transition-transform">
//       <div className="space-y-4 text-white text-center">
//         <h2 className="text-xl sm:text-2xl font-bold">
//           <code>{props.title}</code>
//         </h2>
//         <p className="text-sm sm:text-base leading-relaxed">
//           <code>{props.description}</code>
//         </p>
//         <div className="flex flex-wrap justify-center gap-2">
//           {props.tech.map((element) => (
//             <span
//               key={element}
//               className="inline-block border border-gray-700 text-xs px-2 py-1 rounded-md"
//             >
//               <code>{element}</code>
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6">
//         <a
//           href={props.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block w-full text-center bg-cyan-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-mono font-bold hover:scale-105 transition-transform hover:bg-cyan-400"
//         >
//           <code>View Project</code>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default ProjectCard;


import React from "react";

function ProjectCard(props) {
  return (
    <div className="w-full min-w-[280px] max-w-sm h-[420px] bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 flex flex-col justify-between hover:scale-105 transition-transform">
      
      {/* scrollable content */}
      <div className="space-y-4 text-white text-center overflow-y-auto pr-1">
        <h2 className="text-xl sm:text-2xl font-bold">
          <code>{props.title}</code>
        </h2>

        <p className="text-sm sm:text-base leading-relaxed">
          <code>{props.description}</code>
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {props.tech.map((element) => (
            <span
              key={element}
              className="inline-block border border-gray-700 text-xs px-2 py-1 rounded-md"
            >
              <code>{element}</code>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-cyan-500 text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-mono font-bold hover:scale-105 transition-transform hover:bg-cyan-400"
        >
          <code>View Project</code>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
