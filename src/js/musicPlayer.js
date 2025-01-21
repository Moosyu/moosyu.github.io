export function initializeMusicPlayer() {
    const playpause_btn = document.querySelector("#play-pause");
    const volume_slider = document.querySelector(".volume_slider");
    const imgElement = document.querySelector(".cd-rotate > img");
    const cdImage = document.querySelector(".cd-image");
    const cdTitle = document.querySelector(".cd-title");
    const cdLink = document.querySelector(".cd-link");

    let isPlaying = false;
    let curr_track = document.createElement("audio");
    const baseVolume = 0.2;
    let trackLoaded = false;

    cdImage.src = "https://i.imgur.com/twC2FbB.png";
    cdTitle.textContent = "All My Friends - LCD Soundsystem";
    cdLink.setAttribute("href", "https://www.youtube.com/watch?v=aygY5OqMuKE");

    function loadTrack() {
        curr_track.src = "https://files.catbox.moe/rmhd9e.mp3";
        curr_track.load();
        curr_track.loop = true;
        curr_track.volume = baseVolume;
        volume_slider.value = baseVolume * 100;
        trackLoaded = true;
    }

    function playTrack() {
        if (!trackLoaded) {
            loadTrack();
        }
        curr_track.play();
        isPlaying = true;
        playpause_btn.innerHTML = '||';
        imgElement.classList.add('spin-animation');
    }

    function pauseTrack() {
        curr_track.pause();
        isPlaying = false;
        playpause_btn.innerHTML = '▶';
        imgElement.classList.remove('spin-animation');
    }

    function setVolume() {
        curr_track.volume = volume_slider.value / 100;
    }

    playpause_btn.addEventListener('click', () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    volume_slider.addEventListener('input', setVolume);
}
