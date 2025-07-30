async function fetchLogs() {
  const res = await fetch(
    "https://api.github.com/repos/Sangam5756/learning-journey/contents/blogs",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.filter((file) => file.name.endsWith(".md"));
}

import Link from "next/link";

export default async function LearningJourneyPage() {
  const logs = await fetchLogs();

  return (
    <div data-theme="light">
      {/* 🌌 Background Gradient */}
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 h-full w-full -z-10">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* 🧱 Content Container */}
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
          {/* 🔙 Back to Home */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-blue-400 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>

          {/* 📝 Page Heading */}
          <h1 className="text-3xl font-bold mb-4 text-white">📖 Coding Journey</h1>

          {/* 📚 Blog List */}
          <ul className="space-y-4">
            {logs?.map((log) => {
              const slug = log.name.replace(".md", "");
              const formattedTitle = slug
                .replace(/---/g, " — ")
                .replace(/-/g, " ");

              return (
                <li
                  key={log.name}
                  className="p-4 border border-zinc-800 rounded-md bg-neutral-900 hover:shadow-md transition"
                >
                  <h2 className="text-lg font-semibold text-white mb-1">
                    {formattedTitle}
                  </h2>
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
