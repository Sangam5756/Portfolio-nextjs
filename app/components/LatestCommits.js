"use client";
import React, { useEffect, useState } from "react";

const RecentCommits = () => {
    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const res = await fetch("https://api.github.com/users/Sangam5756/events");
                const data = await res.json();

                const pushEvents = data.filter((event) => event.type === "PushEvent");

                const latestCommits = pushEvents
                    .flatMap((event) =>
                        event.payload.commits.map((commit) => ({
                            repo: event.repo.name,
                            message: commit.message,
                            url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
                            date: new Date(event.created_at).toLocaleString(),
                        }))
                    )
                    .slice(0, 3); // Show only 3 commits

                setCommits(latestCommits);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching commits:", error);
                setLoading(false);
            }
        };

        fetchCommits();
    }, []);

    return (
        <div className="bg-gray-900 rounded-xl p-6 shadow-xl my-10 text-white">
            <h2 className="text-xl font-bold mb-4">📝 Recent GitHub Commits</h2>

            {loading ? (
                <div className="text-cyan-400 animate-pulse">Loading recent commits...</div>
            ) : (
                <div className="space-y-4">
                    {commits.map((commit, index) => (
                        <div
                            key={index}
                            className="border border-gray-800 rounded-lg p-4 bg-neutral-800 hover:bg-neutral-700 transition duration-200"
                        >
                            <p className="text-sm text-cyan-400 font-semibold">{commit.repo}</p>
                            <p className="text-base text-gray-100">{commit.message}</p>
                            <div className="flex justify-between items-center text-sm mt-2">
                                <span className="text-gray-400">{commit.date}</span>
                                <a
                                    href={commit.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-500 hover:underline"
                                >
                                    View →
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* Show more button */}
                    <div className="pt-4 text-center">
                        <a
                            href="https://github.com/Sangam5756"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
                        >
                            Show More on GitHub →
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecentCommits;
