(function newHeader() {
    var images = [
      "../assets/blender_drip.gif",
      "../assets/miscellaneous.gif",
      "../assets/software.gif",
      "../assets/updog.gif",
    ];
    document.getElementById("randTop").src = images[Math.floor(Math.random() * images.length)];
  })();