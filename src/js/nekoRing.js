// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget
const tricker = {
    href: 'https://moosyu.nekoweb.org/',
};

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = tricker.href; //get the url of the site we're currently on
thisIndex = null;
var widgetColor = ""; // blank so the image isn't changed if no color

// go through the site list to see if this site is on it and find its position
for (var i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}

function tagrandomSite() {
  otherSites = tagsites.slice(); //create a copy of the sites list
  otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  var randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

  //find the 'next' and 'previous' sites in the ring. this code looks complex
  //because it's using a shorthand version of an if-else statement to make sure
  //the first and last sites in the ring join together correctly
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

  indexText = ""
  //if you've chosen to include an index, this builds the link to that
  if (useIndex) {
    indexText = `<a href='${indexPage}'>Make Your Mark!</a> `;
  }

  randomText = ""
  //if you've chosen to include a random button, this builds the link that does that
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='tagrandomSite()'>Random</a> `;
  }

  //this is the code that displays the widget - EDIT THIS if you want to change the structure

tag.insertAdjacentHTML('afterbegin', `
<div class="webring-bg">
  <div class="webring-wrapper">
    <div class="webring-flex">
      <!-- First Arrow Image (Prev) -->
      <div class="webring-prev">
        <a href="${sites[previousIndex]}" target="_parent">
          <img class="arrow-image" src="https://darkosparko.nekoweb.org/webrings/neko-tag/neko-tag-images/arrow-0970.png" style="transform: scaleX(-1);" alt="arrowleft">
        </a>
      </div>

      <!-- Main Box Div -->
      <div class="box">
        <div style="width: 80px; height: 80px;" id="moosyu">
          <div style="position: relative; top: 10px; right: 3px;">
            <p style="font-size: 16px;">moosyu's</p>
            <div class="wavy-title">
              <span>t</span>
              <span>i</span>
              <span>d</span>
              <span>a</span>
              <span>l</span>
            </div>
            <p style="font-size: 16px;">retreat</p>
          </div>
        </div>
      </div>

      <!-- Second Arrow Image (Next) -->
      <div class="webring-next">
        <a href="${sites[nextIndex]}" target="_parent">
          <img class="arrow-image" src="https://darkosparko.nekoweb.org/webrings/neko-tag/neko-tag-images/arrow-0970.png" alt="arrow right">
        </a>
      </div>
    </div>

      <div class="webring-subtitle">
        You are currently at coordinates <span style="font-weight: bold;">${coordinates[thisIndex]}</span> on the map!
      </div>
      <div class="webring-footer">
        <span class='webring-links'>
          ${randomText}
          ${indexText}
          <br>
          <a href='https://garlic.garden/onionring/' target="_parent">What Is This?</a>
        </span>
      </div>
  </div>
</div>
`);