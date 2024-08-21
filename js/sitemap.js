function changeColor() {
    //https://css-tricks.com/snippets/javascript/random-hex-color/ i love stealing !! (i have no idea how this works)  
    document.getElementById("rainbow-flash").style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
//running it before interval starts because i dont like it starting at default white. probably a better way to do this
changeColor();
setInterval(changeColor, 1000);
//bullshit code
document.addEventListener('DOMContentLoaded', () => {
const overlay = document.getElementById('overlay');
const audio = document.getElementById('moyai');
const body = document.body;

document.getElementById('door').addEventListener('click', () => {
    overlay.classList.remove('hidden');
    body.classList.add('no-scroll');
    audio.play();
    audio.addEventListener('ended', () => {
        overlay.classList.add('hidden');
        body.classList.remove('no-scroll');
        });
    });
});