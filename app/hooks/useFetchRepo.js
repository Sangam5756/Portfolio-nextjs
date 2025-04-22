import { GitAPi, githubUserName } from "../utils/constant";

const useFetchRepo = async () => {
    try {
        const res = await fetch(`https://api.github.com/users/${githubUserName}/repos`, {
            headers: {
                Authorization: `token ${GitAPi}`,

            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message)

    }
}

export default useFetchRepo;