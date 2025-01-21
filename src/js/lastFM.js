const USERNAME = "moosyu"; // Put your LastFM username here
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();

    let isPlaying = json.track['@attr']?.nowplaying || false;

    if(!isPlaying) {
        // Trigger if a song isn't playing
        return;
    } else {
        // Trigger if a song is playing
    }

    // Values:
    // COVER IMAGE: json.track.image[1]['#text']
    // TITLE: json.track.name
    // ARTIST: json.track.artist['#text']

    document.getElementById("listening").innerHTML = `
    <div id="trackInfo">
    <p>Last heard: <a href="${json.track.url}">${json.track.name}</a> by ${json.track.artist['#text']}</p>
    </div>
    `
};

getTrack();
setInterval(() => { getTrack(); }, 10000);
