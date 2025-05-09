// import React from "react";
// import { EXPERIENCES } from "../utils/constant";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Experience
//       </motion.h1>
//       <div className="px-2">
//         {/* experience year */}
//         {EXPERIENCES?.map((experience, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full lg:w-1/4"
//             >
//               <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{opacity:0, x:100}}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4"
//             >
//               {/* role and company */}
//               <h6 className="mb-2 font-semibold">
//                 {experience.role}{" "}
//                 <span className="text-sm text-purple-100">
//                   ({experience.company})
//                 </span>
//               </h6>

//               {/* description */}
//               <p className="mb-4  text-neutral-400">{experience.description}</p>
//               {experience?.technologies?.map((tech, index) => (
//                 <span
//                   className="mr-2  mt-4 rounded  bg-neutral-900 px-2 py-1 text-sm text-purple-800 font-medium"
//                   key={index}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default Experience;
// import React from "react";
// import { EXPERIENCES } from "../utils/constant";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <div className="">
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold text-white mb-10 text-center"
//       >
//         Experience
//       </motion.h1>

//    <div className="border-l-2 border-neutral-700 ml-4 pl-6 relative">
//       {EXPERIENCES.map((exp, index) => (
//         <motion.div
//           key={index}
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 40 }}
//           transition={{ duration: 0.6, delay: index * 0.2 }}
//           className="relative mb-12"
//         >
//           {/* Dot indicator */}
//           <div className="absolute -left-[38px] h-6 w-6 rounded-full bg-white border-4 border-black" />

//           {/* Card */}
//           <div className="rounded-md border border-neutral-700 p-5 text-white max-w-2xl">
//             {/* Job Role */}
//             <h2 className="text-lg font-bold flex items-center gap-2">
//               {exp.role}
//             </h2>

//             {/* Company and Dates */}
//             <div className="text-sm text-gray-400 flex justify-between mt-1">
//               <span>{exp.company}</span>
//               <span>{exp.year}</span>
//             </div>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mt-4">
//               {exp.technologies.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="bg-[#022c22] text-green-400 px-3 py-1 text-xs rounded-full font-medium"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from "react";
import { EXPERIENCES } from "../utils/constant";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-10 text-center"
      >
        Experience
      </motion.h1>

      <div className="border-l-2 border-neutral-700  pl-6 relative">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative mb-12"
          >
            {/* Dot indicator */}
            <div className="absolute -left-[38px] h-6 w-6 rounded-full bg-white border-4 border-black" />

            {/* Card */}
            <div className="rounded-md border border-neutral-700 p-5 text-white max-w-2xl">
              {/* Job Role */}
              <div className="flex items-center justcify-center gap-5 ">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  {exp.role}
                </h2>

                {exp.appLink && (
                  <a
                    href={exp.appLink}
                    target="_blank"
                    className="inline-block text-sm text-blue-400 hover:text-white hover:underline transition-all duration-200"
                  >
                    🔗 App Link
                  </a>
                )}
              </div>

              {/* Company with logo and link */}
              <div className="text-sm text-gray-400 flex justify-between items-center mt-1">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-6 w-6 object-contain"
                    />
                  )}
                  <span>{exp.company}</span>
                </a>

                <span>{exp.year}</span>
              </div>

              {/* Description
              <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                {exp.description}
              </p> */}
              <ul className="mt-4 list-disc list-inside text-sm text-neutral-300 space-y-2 leading-relaxed">
                {exp.description.map((point, idx) => (
                  <li key={idx}>
                    {point.split("\n").map((line, lineIdx) => (
                      <span key={lineIdx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#022c22] text-green-400 px-3 py-1 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
