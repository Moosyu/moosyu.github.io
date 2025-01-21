export async function updateNekocafeStatus(username, posts_url, profile_url) {
    try {
        const request = await fetch(posts_url + username);
        let json = await request.json();
        json = json[0];

        const div = document.getElementById("nekocafe-status");
        div.innerHTML = `
        <a href="${profile_url + username}" target="_blank">
            <h2 id="nekocafe-poster">My status</h2>
        </a>
        <p id="nekocafe-text">${json["post"]}</p>
        `;
    } catch (error) {
        console.error("Fetching nekocafe status failed:", error);
    }
}