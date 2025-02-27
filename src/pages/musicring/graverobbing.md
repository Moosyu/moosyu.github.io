---
layout: "layout.njk"
title: "Music-ring"
---

{% set prismCss %} {% include "../../css/prismTheme.css" %} {% endset %}
<style>
    {{ prismCss | cssmin | safe }}
</style>

<div class="background-div">
In honour of my goat Jon we will be robbing his grave and pillaging it for all it has with the music-ring v2. The little spinning disk thing was torn straight from the rotting carcass of the original.

## Rules:

Your site has got to have at least a little content (a random page with just links to other sites won't do).

## Joining:

  Message memecompanies on Discord, jethro_croucher on Instagram, noahmacneils on Twitter or email moosyu@tuta.io (I don't check my emails or Twitter super often though). In your email include the name you'd like for the slug, your site's url URL and your favourite musician/band.

## Adding the widget:

```html
<div style="width:104px; display: inline-block;">
    <a href="https://moosyu.github.io/pages/musicring/graverobbing/"><img style="image-rendering: pixelated;" src="/assets/music_disk.gif"></a>
    <a href="https://moosyu.github.io/pages/musicring/redirect?to=prev&name=NAME">Prev</a>
    <a href="https://moosyu.github.io/pages/musicring/redirect?to=next&name=NAME">Rand</a>
    <a href="https://moosyu.github.io/pages/musicring/redirect?to=random&name=NAME">Next</a>
</div>
```

(All you really need are the links so you're fine to customise the widget however you'd like.)

## Example widget:

<div style="width:104px; display: inline-block;">
    <a href="https://moosyu.github.io/pages/musicring/graverobbing/"><img style="image-rendering: pixelated;" src="/assets/music_disk.gif"></a>
    <a href="https://moosyu.github.io/pages/musicring/redirect?to=prev&name=moosyu">Prev</a>
    <a href="https://moosyu.github.io/pages/musicring/redirect?to=next&name=moosyu">Rand</a>
    <a href="https://moosyu.github.io/pages/musicring/redirect?to=random&name=moosyu">Next</a>
</div>

## Member list:

<div id="members"></div>

<script>
    const DATA_FOR_WEBRING = `/sitesMusicRing.json`;

const list = document.getElementById("members");

function convertHTML(str) {
  var regexTable =  {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
    };

  let result = str;

  var regexKeys = Object.keys(regexTable);

  for (var i=0; i<regexKeys.length; i++) {

    let regex = new RegExp(regexKeys[i], 'g');
    result = result.replace(regex, regexTable[regexKeys[i]]);
  }

  return result;
}

fetch(DATA_FOR_WEBRING)
  .then((response) => response.json())
  .then((sites) => {
    list.innerHTML = `
    <table class="music-table">
    <thead>
        <tr>
        <th scope="col">Member</th>
        <th scope="col">URL</th>
        <th scope="col">Favourite musician/band</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
        <tr>
        <th scope="row" colspan="2">Members</th>
        <td>${sites.length}</td>
        </tr>
    </tfoot>
    </table>
    `;
    for (var i = 0; i < sites.length; i++) {
      let rowHTML = `
        <tr>
          <td>${convertHTML(sites[i].name)}</td>
          <td><a href="${sites[i].url}">${sites[i].url}</a></td>
          <td>${convertHTML(sites[i].musician)}</td>
        </tr>
      `;
      list.querySelector('tbody').innerHTML += rowHTML;
    }
  });
</script>