// app/learning-journey/page.jsx or .tsx
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

async function fetchLogs() {
  const res = await fetch(
    "https://api.github.com/repos/Sangam5756/learning-journey/contents/blogs",
    { cache: "no-store" }
  );
  const files = await res.json();
 if (!Array.isArray(files)) {
    console.error("GitHub API returned unexpected data:", files);
    return [];
  }
  const mdFiles = files?.filter((file) => file.name.endsWith(".md"));

  // Fetch latest commit for each file
  const enriched = await Promise.all(
    mdFiles.map(async (file) => {
      const commitRes = await fetch(
        `https://api.github.com/repos/Sangam5756/learning-journey/commits?path=blogs/${file.name}&per_page=1`
      );
      const commitData = await commitRes.json();
      const commitDate = commitData[0]?.commit?.committer?.date;

      return {
        ...file,
        commitDate,
      };
    })
  );

  // Sort by most recent commit date
  return enriched.sort(
    (a, b) => new Date(b.commitDate) - new Date(a.commitDate)
  );
}

export default async function LearningJourneyPage() {
  const logs = await fetchLogs();

  return (
    <div data-theme="light">
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 h-full w-full -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-blue-400 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-4 text-white">📖 Coding Journey</h1>

          <ul className="space-y-4">
            {logs?.map((log) => {
              const slug = log.name.replace(".md", "");
              const formattedTitle = slug
                .replace(/---/g, " — ")
                .replace(/-/g, " ");

              const timeAgo = log.commitDate
                ? formatDistanceToNow(new Date(log.commitDate), {
                    addSuffix: true,
                  })
                : "Unknown";

              return (
                <li
                  key={log.name}
                  className="p-4 border border-zinc-800 rounded-md bg-neutral-900 hover:shadow-md transition"
                >
                  <h2 className="text-lg font-semibold text-white mb-1">
                    {formattedTitle}
                  </h2>
                  <p className="text-xs text-zinc-400 mb-2">🕒 {timeAgo}</p>
                  <Link
                    href={`/learning-journey/${slug}`}
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Read More →
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// import Link from "next/link";
// async function fetchLogs() {
//   const res = await fetch(
//     "https://api.github.com/repos/Sangam5756/learning-journey/contents/blogs",
//     { cache: "no-store" }
//   );
//   const data = await res.json();
//   return data?.filter((file) => file.name.endsWith(".md"));
// }


// export default async function LearningJourneyPage() {
//   const logs = await fetchLogs();

//   return (
//     <div data-theme="light">
//       <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//         <div className="fixed top-0 h-full w-full -z-10">
//           <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//         </div>

//         <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
//           <div className="mb-6">
//             <Link
//               href="/"
//               className="inline-flex items-center text-sm text-blue-400 hover:underline"
//             >
//               ← Back to Home
//             </Link>
//           </div>

//           <h1 className="text-3xl font-bold mb-4 text-white">📖 Coding Journey</h1>

//           <ul className="space-y-4">
//             {logs?.map((log) => {
//               const slug = log.name.replace(".md", "");
//               const formattedTitle = slug
//                 .replace(/---/g, " — ")
//                 .replace(/-/g, " ");

//               return (
//                 <li
//                   key={log.name}
//                   className="p-4 border border-zinc-800 rounded-md bg-neutral-900 hover:shadow-md transition"
//                 >
//                   <h2 className="text-lg font-semibold text-white mb-1">
//                     {formattedTitle}
//                   </h2>
//                   <Link
//                     href={`/learning-journey/${slug}`}
//                     className="text-blue-400 hover:underline text-sm"
//                   >
//                     Read More →
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
