const player=document.getElementById("music-player");
const pause_button=document.getElementById("play-pause");

var songs= "test"



function play_pause(){
    if (player.paused) {
        player.play();
        pause_button.innerHTML="||";
    }
    else {
        player.pause();
        pause_button.innerHTML="▶";
    }
}

function playAudio(x){
    let a=document.getElementById(x);
    if (a.paused) {
        a.play();
    }
    else {
        a.pause();
    }
}


function setVolume(vol,sounds){
    document.getElementById(sounds).volume = document.getElementById(vol).value;
}