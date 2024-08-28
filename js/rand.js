(function newChina() {
  const datelel = new Date();
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const data = {
    china: [
      `man spends entire life savings on a single valorant skin`,
      `does the government have enough birds to spy on us with?`,
      `fortnite season 600 coming out in ${(month[datelel.getMonth() + 1]).toLowerCase()}`,
      `the one piece found to be the friends we made along the way`,
      `pitbull denies toddler eating claims`,
      `reporters blow up plane﹐ expose security lapses`,
      `group of white women protest a war happening on the other side of the world, nothing happens`,
      `man chasers lucifer son of the morning out of earth`,
      `david seymour comes out as a pedophile`,
      `floridian prankster adds aids to all blood`,
      `man slaughters family of 4﹐ defence claims "it was just a prank, calm down liberals"`,
      `minecraft youtuber breaks record of 3 days without being exposed as a pedophile`,
      `high schools maths teacher turned meth kingpin shot dead`,
      `jake paul challenges old man to fight him`,
      `20 year old man named daniel thinks he can become a youtuber`,
      `senile old man becomes the most powerful man in the world`,
      `jk rowling announces dumbledore to be a bottom`,
      `child bitten by yellow animatronic bear`,
      `man arrested for growing a whole says "recent research show it's not so darn harmful"`,
      `joe biden being controlled by "very evil forces"`,
      `scientists discover new planet with enough space to fit inside every man in your surrounding area called your mother`,
      `is this niggerlicous or is this divine intellect?`,
      `i see your comments ladies and they make me smile. im lurking and stalking when you least expect it.`,
      `everyone involved in igcse mysteriously dies (wtf)??`
    ],
  };
  
  var text = data.china;
  var news = [];
  var colours = [
    "#f5a97f",
    "#eed49f",
    "#7dc4e4",
    "#c6a0f6",
    "#a6da95"
  ];
  
  var chinaElement = document.getElementById("china");
  
  if (chinaElement) {
    chinaElement.style.color = colours[Math.floor(Math.random() * colours.length)];
    
    while (news.length < text.length) {
      let randTemp = ((text[Math.floor(Math.random() * text.length)]));
      if (!news.includes(randTemp)) {
        news.push(randTemp);
      }
    }
    
    chinaElement.innerHTML = news.join(' - ').replace(',', '');
  } else {
    console.error('china missing');
  }
}());