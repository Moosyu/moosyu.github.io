const getCommit = async () => {
    const github_fetch = `https://api.github.com/repos/Moosyu/moosyu.github.io/commits?per_page=1`;
    try {
        const response = await fetch(github_fetch);
        const data = await response.json();
        const sha = data[0].sha;
        const shortSha = sha.substring(0, 7);
        const authorDate = new Date(data[0].commit.author.date);

        document.getElementById("commit-div").innerHTML = `
            <div id="commitDiv">
                <p>Latest commit: <a href="https://github.com/Moosyu/moosyu.github.io/commit/${sha}">${shortSha}</a> on ${authorDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })} ${data[0].commit.message}</p>
            </div>
        `;
    } catch (error) {
        console.error("Fetching Github latest commit failed:", error);
    }
};

getCommit();