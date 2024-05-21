(function newChina() {
  var text = data.china;
  var news =[];
  var colours = [
    "orange",
    "yellow",
    "cyan",
    "magenta",
    "lime"
  ]; 
  document.getElementById("china").style.color = colours[Math.floor(Math.random() * colours.length)];
  while (news.length < text.length) {
    news.push(text[Math.floor(Math.random() * text.length)])
  }

  document.getElementById('china').innerHTML = news.join('').replace(',', ' - '); //broken rn
}())