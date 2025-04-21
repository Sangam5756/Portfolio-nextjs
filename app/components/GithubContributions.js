// // // "use client";

// // // import React from "react";
// // // import GitHubCalendar from "react-github-calendar";

// // // const GithubContributions = () => {
// // //   return (
// // //     <div className="mt-10 text-center">
// // //       <h2 className="text-2xl font-semibold mb-4 text-white">GitHub Contributions</h2>
// // //       <div className="flex justify-center">
// // //         <GitHubCalendar
// // //           username="Sangam5756"
// // //           blockSize={15}
// // //           blockMargin={5}
// // //           fontSize={16}
// // //           colorScheme="light"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default GithubContributions;
// // "use client";

// // import React, { useState } from "react";
// // import GitHubCalendar from "react-github-calendar";
// // import { subYears, startOfToday } from "date-fns";

// // const GithubContributions = () => {
// //     // Optional: Limit data to just last year
// //     const until = startOfToday();
// //     const from = subYears(until, 1);
// //     const [year,setYear] = useState(2025)

// //     return (
// //         <div className=" text-center">
// //             <h2 className="text-2xl font-semibold mb-4 text-white">GitHub Contributions</h2>
// //             <div className="flex justify-center overflow-hidden overflow-x-scroll">
// //                 <GitHubCalendar
// //                     username="Sangam5756"
// //                     year={}
// //                     blockSize={15}
// //                     blockMargin={5}
// //                     fontSize={16}
// //                     colorScheme="light"
// //                     transformData={(contributions) =>
// //                         contributions.filter((day) => {
// //                             const date = new Date(day.date);
// //                             return date >= from && date <= until;
// //                         })
// //                     }
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // export default GithubContributions;
// import React, { useEffect, useState } from "react";
// import GitHubCalendar from "react-github-calendar";

// const GitHubStats = () => {
//     const [year, setYear] = useState(2025);

//     return (
//         <div className="bg-gray-900 rounded-xl p-6 my-10 shadow-xl">
//             <div className="flex items-center justify-between mb-6">
//                 <h1 className="text-xl font-semibold">GitHub Contributions</h1>
//                 <select
//                     className="bg-gray-800 rounded px-3 py-1 text-sm border border-gray-700"
//                     value={year} // Bind the year value to the state
//                     onChange={(e) => setYear(Number(e.target.value))} // Update the year when the dropdown value changes
//                 >
//                     <option value={2025}>2025</option>
//                     <option value={2024}>2024</option>
//                 </select>
//             </div>

//             <div>
//                 <GitHubCalendar username="Sangam5756" year={year} />
//             </div>
//         </div>
//     );
// };

// export default GitHubStats;
import GitHubCalendar from "react-github-calendar";
import { useState } from "react";
import LatestCommits from "./LatestCommits";

const GithubContributions = () => {
    const [year, setYear] = useState(2024);



    return (
        <div className="bg-gray-900 rounded-xl p-2 shadow-xl ">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">GitHub Contributions</h2>
                <select
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="bg-gray-800 text-sm rounded border border-gray-700 px-3 py-1 text-white"
                >
                    <option value={2025}>2025</option>
                    <option value={2024}>2024</option>
                </select>
            </div>
            <GitHubCalendar username="Sangam5756" year={year} />
            {/* <LatestCommits /> */}
        </div>
    );
};

export default GithubContributions;
