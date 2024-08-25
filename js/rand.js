(function newChina() {
  var text = data.china;
  var news =[];
  var colours = [
    "#f5a97f",
    "#eed49f",
    "#7dc4e4",
    "#c6a0f6",
    "#a6da95"
  ]; 
  document.getElementById("china").style.color = colours[Math.floor(Math.random() * colours.length)];
  while (news.length < text.length) {
    let randTemp = ((text[Math.floor(Math.random() * text.length)]))
    if (! news.includes(randTemp)) { //perhaps the worst code ive ever written. im almost 100% sure there is a better way to do this. this is why when i code in c i always end up with 60 memory leaks.
      news.push(randTemp) //this code will also blow up your pc if you duplicate something in data.js so watch out
    }
  }

  document.getElementById('china').innerHTML = news.join(' - ').replace(',', '');
}())