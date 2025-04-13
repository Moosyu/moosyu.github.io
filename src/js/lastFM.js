(async () => {
    try {
        const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=moosyu&api_key=e3b58abffa64551cc31a214fdf5e1870&format=json&limit=1');
        const data = await response.json();
        const track = data.recenttracks.track[0];

        document.getElementById("listening").innerHTML = `
        <div id="trackInfo">
            <span>Last heard: <a href="${track.url}">${track.name}</a> by ${track.artist['#text']}</span>
        </div>`;
    
    } catch (error) {
        console.error("Fetching LastFM failed:", error);
    }
})();