(function newChina() {
  var text = data.china;
  var colours = [
    "darkblue",
    "orange",
    "yellow",
    "cyan",
    "magenta",
    "lime"
  ];
  document.getElementById("china").style.color = colours[Math.floor(Math.random() * colours.length)];
  document.getElementById('china').innerHTML = text[Math.floor(Math.random() * text.length)];
}())

(function newReviews() {
  var text = data.reviews;
  document.getElementById('reviews').innerHTML = text[Math.floor(Math.random() * text.length)];
}());