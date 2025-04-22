import { GitAPi, githubUserName } from "../utils/constant";

const useFetchReadme = async (repoName) => {
    try {

        const res = await fetch(`https://raw.githubusercontent.com/${githubUserName}/${repoName}/main/README.md`, {
            headers: {
                Authorization: `token ${GitAPi}`,

            }
        });
        const text = await res.text();
        return text;
    } catch (err) {
        console.error("Failed to fetch README:", err);
        return "README not found.";
    }
};


export default useFetchReadme