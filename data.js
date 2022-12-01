let metersAway = Math.floor(Math.random() * 300);
const data = {
  header: {
    image: "",
    subtitle: [
      `"hitler is cringe lmao" - joseph stalin, 1942`,
      `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">join discord server here</a>`,
      `reload for another message`,
      `<h2>big text</h2>`,
      `Joe is ${Math.random() > 0.5 ? "attractive" : "ugly"}`,
      `Oi its 'm8', innit?`,
      `you lose daughter banging privileges`,
      `i like kids - joe`,
      `joe`,
      `my life be like😔`,
      `i'll move to america then i'll sue you - chris pratt`,
      `your acting a bit sussy jonathan`,
      `Lets get hypixel youtube rank guys! 1/30000`,
      `is that a jojo reference?`,
      `THIS SITE GETS AN EASY F TIER FROM ME`,
      `thanks i ${Math.random() > 0.5 ? "htae" : "hate"} it`,
      () => {
        let interval = setInterval(() => {
          const quote = document.getElementById("headerSubtitle");
          if (metersAway > 0) {
            quote.innerHTML = `I am within ${metersAway} meters and rapidly approaching`;
            metersAway--;
          } else if (metersAway <= 0) {
            quote.innerHTML = "Knock knock, I'm at your door.";
            clearInterval(interval);
          }
        }, 100);
      },
      `<img src="https://cdn.discordapp.com/emojis/775767117089865758.gif?v=1"  draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/837301591198924810.png?v=1" draggable="false">`,
      `<img src="https://cdn.discordapp.com/emojis/784933350569279498.png?v=1" draggable="false">`,
    ],
  },
  credits: [
    {
    },
  ],
};