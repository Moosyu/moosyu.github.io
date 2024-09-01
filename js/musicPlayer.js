//a destroyed version of this code: https://www.geeksforgeeks.org/create-a-music-player-using-javascript
let playpause_btn = document.querySelector("#play-pause");
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let isPlaying = false;
let updateTimer;
let curr_track = document.createElement('audio');
const baseVolume = 0.2;
const imgElement = document.querySelector('.cd-rotate > img');


function loadTrack() {
    clearInterval(updateTimer);
    curr_track.src = "https://files.catbox.moe/57r3nu.mp3";
    curr_track.load();
    curr_track.loop = true;
    curr_track.volume = baseVolume;
    volume_slider.value = baseVolume * 100;
    updateTimer = setInterval(seekUpdate, 1000);
}

loadTrack();

function playpauseTrack() {
    if (!isPlaying) {
        playTrack();
        imgElement.classList.remove('reverse-spin-animation');
        imgElement.classList.add('spin-animation');
          } else {
        pauseTrack();
        const computedStyle = window.getComputedStyle(imgElement);
        const matrix = computedStyle.transform;
        /* 
        matrix here looks like this: matrix(-0.182574, -0.983192, 0.983192, -0.182574, 0, 0)
        and is built up like this 
        \ cos(θ)  -sin(θ)  0 \
        \ sin(θ)   cos(θ)  0 \

        only a and b are needed for rotation to and they are cos(0) and sin(0)
        */
        let angle = 0;
        if (matrix !== 'none') {
          const values = matrix.split('(')[1].split(')')[0].split(',');
          // getting array [a,b,c,d,e,f]
          const a = values[0]; //cos(0)
          const b = values[1]; //sin(1)
          angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
          /* math.atan2(b,a) is getting the arctangent of b / a and returns an angle (in radians). atan2 > atan bc (im pretty sure)
          atan only outputs two quadrants dont quote me on that tho 
          then multiplying it by  (180 / Math.PI) to convert the angle from radians to degrees and then it gets rounded to the nearest int 
          */
        }
  
        // making the angles positive if they arent
        if (angle < 0) {
          angle = 360 + angle;
        }
  
        imgElement.style.setProperty('--current-rotation', `${angle}deg`);
  
        imgElement.classList.remove('spin-animation');
        imgElement.classList.add('reverse-spin-animation');
  
    }
}

function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '||';
}

function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '▶';
}

function plus10() {
    curr_track.volume = Math.min(curr_track.volume + 0.1, 1.0);
    updateVolumeSlider();
}

function minus10() {
    curr_track.volume = Math.max(curr_track.volume - 0.1, 0.0);
    updateVolumeSlider();
}

function updateVolumeSlider() {
    volume_slider.value = curr_track.volume * 100;
}

function seekTo() {
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);

        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}