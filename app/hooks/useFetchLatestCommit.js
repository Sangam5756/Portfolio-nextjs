import { GitAPi, githubUserName } from "../utils/constant";

const useFetchLatestCommit = async (repoName) => {
    try {
        const res = await fetch(
            `https://api.github.com/repos/${githubUserName}/${repoName}/commits`,
            {
                headers: {
                    Authorization: `token ${GitAPi}`,

                }
            }
        );
        const data = await res.json();
        return data.length > 0 ? data[0].commit.author.date : null;
    } catch (err) {
        console.error("Failed to fetch commits:", err);
        return null;
    }
};


export default useFetchLatestCommit;