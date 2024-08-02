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
    let randTemp = ((text[Math.floor(Math.random() * text.length)]))
    if (! news.includes(randTemp)) { //perhaps the worst code ive ever written. im almost 100% sure there is a better way to do this. this is why when i code in c i always end up with 60 memory leaks.
      news.push(randTemp) //this code will also blow up your pc if you duplicate something in data.js so watch out
    }
  }
  
  for (let index = 0; index < news.length; index++) {
    console.log(news[index])
    
  }


  document.getElementById('china').innerHTML = news.join(' - ').replace(',', '');
}())

// putting this here because rand is getting loaded anyways  ¯\_(ツ)_/¯ this will probably bite me in the ass at some point

var clicked = false

function checkScreenWidth() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  if (screenWidth < 1100 && clicked == false) {
    document.getElementById('warning-message').classList.remove('hidden');
  } else {
    document.getElementById('warning-message').classList.add('hidden');
  }
}

document.getElementById("buttonthingy").onclick = function() {
  clicked = true;
  document.getElementById('warning-message').classList.add('hidden');
};

document.addEventListener('DOMContentLoaded', function() {
  checkScreenWidth();
});

window.addEventListener('resize', function() {
  checkScreenWidth();
});
