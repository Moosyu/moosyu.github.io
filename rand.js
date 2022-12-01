(() => {
  let entry =
    data.header.subtitle[
      Math.floor(Math.random() * data.header.subtitle.length)
    ];
  if (typeof entry == "string")
    document.getElementById("headerSubtitle").innerHTML = entry;
  if(typeof entry == "function")
    entry();
})();
