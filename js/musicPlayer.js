//a destroyed version of this code: https://www.geeksforgeeks.org/create-a-music-player-using-javascript
let playpause_btn = document.querySelector("#play-pause");
let volume_slider = document.querySelector(".volume_slider");
let isPlaying = false;
let updateTimer;
let curr_track = document.createElement('audio');
const baseVolume = 0.2;
const imgElement = document.querySelector('.cd-rotate > img');


function loadTrack() {
    clearInterval(updateTimer);
    curr_track.src = "https://files.catbox.moe/ea519i.mp3";
    curr_track.load();
    curr_track.loop = true;
    curr_track.volume = baseVolume;
    volume_slider.value = baseVolume * 100;
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

function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}