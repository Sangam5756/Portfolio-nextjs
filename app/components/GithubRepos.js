"use client";
import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ReadmeViewer from "./ReadmeViewer";
const token = "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";
const GithubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [readmeContent, setReadmeContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [readmeLoading, setReadmeLoading] = useState(false);

  const username = "Sangam5756";
  const fetchReadme = async (repoName) => {
    try {
      const res = await fetch(`/api/readme?repoName=${repoName}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch README");
      }

      const data = await res.json();
      return data.readme || "README not found.";
    } catch (err) {
      console.error("Failed to fetch README:", err);
      return "README not found.";
    }
  };

  // Fetch the latest commit for each repository
  const fetchLatestCommit = async (repoName) => {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/commits`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      const data = await res.json();
      return data.length > 0 ? data[0].commit.author.date : null; // Get the date of the latest commit
    } catch (err) {
      console.error("Failed to fetch commits:", err);
      return null;
    }
  };

  useEffect(() => {
    const fetchRepos = async () => {
      const cached = localStorage.getItem("github_repos");
      const cacheTime = localStorage.getItem("github_repos_time");

      if (cached && cacheTime && Date.now() - cacheTime < 3600000) {
        setRepos(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        const reposWithCommits = await Promise.all(
          data.map(async (repo) => {
            const lastCommitDate = await fetchLatestCommit(repo.name);
            return { ...repo, lastCommitDate };
          })
        );

        const sortedRepos = reposWithCommits
          .sort(
            (a, b) => new Date(b.lastCommitDate) - new Date(a.lastCommitDate)
          )
          .slice(0, 6); // only latest 12

        // 💾 Save to localStorage
        localStorage.setItem("github_repos", JSON.stringify(sortedRepos));
        localStorage.setItem("github_repos_time", Date.now().toString());

        setRepos(sortedRepos);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-10 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        🚀 Recent Activity
      </h2>

      {loading ? (
        <p className="text-center text-cyan-400">Loading projects...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 overflow-hidden lg:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-neutral-900 p-5 rounded-xl border border-neutral-800 shadow-md hover:shadow-lg transition"
            >
              <img
                src={`https://raw.githubusercontent.com/${username}/${repo.name}/main/preview.png`}
                alt={`${repo.name} preview`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/gitlogo.png";
                }}
                className="w-full h-40 rounded-lg mb-3 object-fit object-top"
                onClick={async () => {
                  setReadmeLoading(true);
                  setShowModal(true);
                  setSelectedRepo(repo.name);
                  const readme = await fetchReadme(repo.name);
                  setReadmeContent(readme);
                  setReadmeLoading(false);
                }}
              />

              <h3 className="text-md font-semibold capitalize text-purple-400 mb-2">
                {repo.name}
              </h3>
              <p className="text-sm text-ellipsis line-clamp-3 text-gray-400 mb-4">
                {repo.description || "No description provided"}
              </p>
              <div className="flex justify-between text-sm text-cyan-300">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub →
                </a>
                <button
                  onClick={async () => {
                    setReadmeLoading(true);
                    setSelectedRepo(repo.name);
                    const readme = await fetchReadme(repo.name);
                    setReadmeLoading(false);
                    setShowModal(true);
                    setReadmeContent(readme);
                  }}
                  className="hover:underline flex items-center gap-2"
                >
                  {readmeLoading && selectedRepo === repo.name ? (
                    <span className="text-xs text-cyan-300">Loading...</span> // or use a spinner
                  ) : (
                    "Read →"
                  )}
                </button>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live →
                  </a>
                )}
              </div>
              {repo.lastCommitDate && (
                <p className="text-xs text-gray-500 mt-2">
                  Last commit:{" "}
                  {formatDistanceToNow(new Date(repo.lastCommitDate), {
                    addSuffix: true,
                  })}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-neutral-900 text-white max-w-3xl w-full p-6 rounded-lg overflow-y-auto max-h-[80vh] shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{selectedRepo} README</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-sm bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Close
              </button>
            </div>
            <ReadmeViewer content={readmeContent} />
          </div>
        </div>
      )}
    </section>
  );
};

export default GithubProjects;
