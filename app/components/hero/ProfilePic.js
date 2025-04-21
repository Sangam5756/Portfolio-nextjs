// "use client";

// import Image from "next/image";

// const ProfilePic = () => {
//     return (
//         <div className="flex flex-col items-center md:items-start  text-center w-2xl md:text-left">
//             <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-cyan-500">
//                 <Image
//                     src="./piccrop.png" // Make sure to put the image in /public folder
//                     alt="Profile"
//                     layout="fill"
//                     className="w-full h-full object-cover object-top scale-100"
//                 // objectFit="cover"
//                 />
//             </div>
//             <div className="py-2">
//                 <h1 className="text-xl mb-1 lg:text-3xl font-bold text-white">Sangam Mundhe</h1>
//                 <p className="text-cyan-400">Software Developer</p>
//             </div>
//         </div>
//     )
// }

// export default ProfilePic
"use client";

import { Resume } from "@/app/utils/constant";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGoogledocs, SiLeetcode, SiWakatime } from "react-icons/si";

const ProfilePic = () => {
    return (
        <div className="flex flex-col items-center   md:items-start text-center md:text-left">
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-cyan-500">
                <Image
                    src="/piccrop.png"
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top center" // zooms towards face
                    className="scale-125" // zoom in a bit
                />
            </div>
            <div className="pt-2 ">
                <h1 className="text-xl lg:text-3xl font-bold text-white">Sangam Mundhe</h1>
                <p className="text-cyan-400">Software Developer</p>
            </div>
            <div className="flex gap-4 text-2xl text-white mt-3 lg:hidden">
                <a href={Resume} target="_blank" title="Resume" className="hover:text-purple-300">
                    <SiGoogledocs />
                </a>
                <a href="https://www.linkedin.com/in/sangammundhe" target="_blank" title="LinkedIn" className="hover:text-purple-300">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/sangam5756" target="_blank" title="GitHub" className="hover:text-purple-300">
                    <FaGithub />
                </a>
                <a href="https://leetcode.com/u/sangammunde3" target="_blank" title="LeetCode" className="hover:text-purple-300">
                    <SiLeetcode />
                </a>
                <a href="https://wakatime.com/@sangammundhe" target="_blank" title="Wakatime" className="hover:text-purple-300">
                    <SiWakatime />
                </a>
            </div>
        </div>
    );
};

export default ProfilePic;
