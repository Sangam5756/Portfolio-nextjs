import GitHubCalendar from "react-github-calendar";
import { useState } from "react";

const GithubContributions = () => {
    const [year, setYear] = useState(2025);



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
