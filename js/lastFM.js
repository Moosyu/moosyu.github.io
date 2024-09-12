// just leaving the api key public because idk how to hide it without going through
const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=moosyu&api_key=e3b58abffa64551cc31a214fdf5e1870&format=json&limit=1`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const track = data.recenttracks.track[0];
        //const date = data.recenttracks.track[0].album["#text"];
        const listeningDiv = document.getElementById('listening');
        listeningDiv.innerHTML = `
        <img src="${track.image[track.image.length - 1]['#text']}" alt="${track.name} album cover">
        <div>
            <h2>${track.name}</h2>
            <h3>by ${track.artist['#text']}</h3>
        </div>
        `;
    })
    .catch(error => console.error('fetching last.fm failed:', error));
