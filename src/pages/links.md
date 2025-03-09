---
layout: "layout.njk"
title: "Links"
---

<div class="background-div">
  Some of the pages on here arent linked anywhere else so its like a scavanger hunt or something idk.

  # Every page:

    {% for page in collections.allPages %}
        <a href="{{ page.url }}">{{ page.url }}</a>
    {% endfor %}

  # Webrings:

  <div id="nekowebring">
    <table style="width: auto;">
      <tbody>
        <tr>
          <td class="webring-prev">
            <a href="https://moosyu.github.io/jsonStorage/nekoRing/redirect.html?to=prev&name=moosyu" target="_parent">
              <img src="/assets/prev-mauve.png" alt="Previous Site">
            </a>
          </td>
          <td style="text-align: center;" class="webring-info">
              <a href="https://webring.nekoweb.org/members" target="_parent">
                <img src="/assets/nekowebring-mauve-title.png" alt="NekoWebRing Index">
              </a>
              <br>
              <span class="webring-links">
                <a href="https://moosyu.github.io/jsonStorage/nekoRing/redirect.html?to=random&name=moosyu" target="_parent">
                <img src="/assets/cat-mauve-nod.gif" alt="Random Site">
              </a>
            </span>
          </td>
          <td class="webring-next">
            <a href="https://moosyu.github.io/jsonStorage/nekoRing/redirect.html?to=next&name=moosyu" target="_parent">
              <img src="/assets/prev-mauve.png" style="-webkit-transform: scaleX(-1); transform: scaleX(-1);" alt="Next Site">
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="padding-top: 5px; color: #ff7598; font-family: ms gothic; background-color: #fff9ce; border: orange 1px solid; padding-bottom: 5px; text-align: center; width: 180px;">
      <a href="https://eggring.neocities.org/"><img src="https://eggring.neocities.org/img/egg.gif" alt="eggring logo" style="image-rendering: pixelated;"></a>
      <br>
      <a href="https://eggring.neocities.org/">The Eggring</a>
      <div style="padding-top: 2px;">
          <a href="https://moosyu.github.io/jsonStorage/eggRing/redirect.html?to=prev&name=moostyswixsite">Prev</a> |
          <a href="https://moosyu.github.io/jsonStorage/eggRing/redirect.html?to=next&name=moostyswixsite">Next</a>
          <br>
          <a href="https://moosyu.github.io/jsonStorage/eggRing/redirect.html?to=random&name=moostyswixsite">Random</a>
      </div>
  </div>
  <div style="display:block; margin: 15px auto;">
      <iframe style="border: none; width: 180px; height: 200px;" src="https://neocities.jeith.com/wii-webring.html?site=https://moosyu.nekoweb.org&variant=standard" title="wiiring iframe">
      </iframe>
  </div>
  <div style="display: inline-block; margin-bottom: 13px;">
      <a href="https://webring.bucketfish.me/redirect.html?to=prev&name=moosyu">←</a>
        <a href="https://webring.bucketfish.me"> bucket webring</a>
      <a href="https://webring.bucketfish.me/redirect.html?to=next&name=moosyu">→</a>
  </div>
  <br>
  <div style="width:104px; display: inline-block;">
      <a href="https://moosyu.github.io/pages/musicring/redirect/"><img style="image-rendering: pixelated;" src="/assets/music_disk.gif"></a>
      <a href="https://moosyu.github.io/pages/musicring/redirect?to=prev&name=moosyu">Prev</a>
      <a href="https://moosyu.github.io/pages/musicring/redirect?to=next&name=moosyu">Rand</a>
      <a href="https://moosyu.github.io/pages/musicring/redirect?to=random&name=moosyu">Next</a>
  </div>
  <br>
  <div style="display: inline-block; margin-top: 13px;">
      <a href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=moosyu&way=prev">←</a>
      <a href="https://jbcarreon123.nekoweb.org/webrings/ssgring">ssg webring</a>
      <a href="https://jbcarreon123.nekoweb.org/webrings/ssgring/redirect?slug=moosyu&way=next">→</a>
  </div>

  # Inspirations, credits and cool sites:

  ## Credits:

  [nekoweb {neocities but more viable for hosting an actual site because the restrictions on neocities are kind of crazy}](https://nekoweb.org/)

  [github pages {the other site i host on, id put lexiqqq here too but they banned me!!}](https://pages.github.com/)

  [fusejs {what i use to get the search bar in the reviews}](https://www.fusejs.io/)

  [lastfm scrobble {tracks my last listened to song for my homepage}](https://www.last.fm/about/trackmymusic)

  [unpoly {what i use for my page transitions}](https://unpoly.com/)

  [ayanos comment widget {what i use for comments on my homepage}](https://virtualobserver.moe/ayano/comment-widget)

  [onzecki {sent me a really well thought out and detailed email about making my site not run like shit which helped my situation quite a lot}](https://onz.ee/)

  ## Inspirations:

  [daniels virtual place {my goat and original inspiration for this site}](https://displayman.neocities.org/)

  [incessantpain {this is probably my favourite site, its so dense and charming, i hope that my site will eventually end up this packed with just stuff}](https://incessantpain.neocities.org/)

  [scump's house {i stole the factory reject flower thing from this guy i think. their site's really nice to look at and their homepage has always been a massive inspiration.}](https://scumpsmallbrain.neocities.org/)


  ## Cool sites

  [aoty {best music tracker by process of elimination because rym is a toxic hellhole and i like aoty's ui more}](https://www.albumoftheyear.org/)

  [wiki.gg {crushes fandom, its not even a competiton, more like some kind of isis execution}](https://www.wiki.gg/)

  [annas archive {they still trying to burn down the library of alexandria 2000 years later}](https://annas-archive.org/)

  [devastatia {one of the only blogs i keep up with, im not gonna say that i agree with all of their opinions but at least they have actual opinions to share. sadly this blog died though.}](https://devastatia.com/)

  [mozilla docs {probably best html resource?? a lot more detail and info then w3schools so you really know whats going on.}](https://developer.mozilla.org/en-US/)

  [w3schools {really helpful when i was getting started}](https://www.w3schools.com/)

  [stackoverflow {smart assholes}](https://stackoverflow.com/)

  [neocities {my day one, my goat}](https://neocities.org/)

  [melps {an cool looking and interesting site thats sadly slowly falling to pieces}](https://melps.neocities.org/)

  [manu {the other blog i like to keep up with, i found him from an interview he did with devastatia in june and while not as off the rails as devastatia hes still a very interesting person and a his site often links other very interesting blogs leading to some sort of never ending rabbit hole}](https://manuelmoreale.com/)

  [superpredator {mind bending images beyond human comprehension. thats all i can say, you have to see it for yourself.}](https://superpredator.zone/)

  My button collection:

  <div class="buttons-links">
    <a href="https://displayman.neocities.org/"><img src="/assets/Botón_página_Daniel.gif" alt="daniel"></a>
    <a href="https://incessantpain.neocities.org/"><img src="/assets/buttonincessant.gif" alt="pain"></a>
    <a href="https://rice.place/" target="_blank"><img src="https://rice.nekoweb.org/button/riceplace.png"></a>
    <a href="https://trademarkhell.net/"><img src="https://eyeorb.net/images/tmsspecialhell.png" alt="trademarkization company of 2003"></a>
    <a href="https://sad.ovh/"> <img src="/assets/sadovh.png" alt="sad.ovh"></a>
    <a href="https://vegacollective.com/"> <img src="/assets/MeatleMania_2.gif" alt="vega collective"></a>
    <a href="https://housepen.nekoweb.org/"> <img src="/assets/housepen.avif" alt="housepen"></a>
    <a href="https://zptr.cc/"><img src="/assets/@me.gif" alt="zeroptr"></a>
    <a href="https://melankorin.net/"><img src="https://melankorin.net/assets/img/buttons/button-1.gif" alt="melan korin"></a>
    <a href="https://obama.nekoweb.org/"><img src="https://obama.nekoweb.org/obbutton.png" alt="barack"></a>
    <a href="https://scumpsmallbrain.neocities.org"> <img src="/assets/scumpshouse.gif" alt="scumps house"></a>
    <a href="https://goblin-heart.net/sadgrl/"> <img src="/assets/sadgrl_online_learn.gif" alt="sadgrl"></a>
    <a href="https://melonking.net/"> <img src="/assets/melonking.gif" alt="melonking"></a>
    <a href="https://max.nekoweb.org/"> <img src="/assets/button.gif" alt="max"></a>
    <a href="https://riversons.art/"> <img src="/assets/rivblink.gif" alt="riverson"></a>
    <a href="https://nekoweb.org/"> <img src="/assets/button11.gif" alt="nekoweb"></a>
    <a href="https://giikis2.neocities.org/"> <img src="https://giikis2.neocities.org/assets/badges/giikis2.png" width="88" height="31" alt="giiki"></a>
    <a href="https://dogspit.nekoweb.org/"><img src="https://i.imgur.com/0pnWFCL.png" alt="dogspit"></a>
    <a href="https://devastatia.com/"><img src="/assets/devastatia-88x31.png" alt="devastatia"></a>
    <a href="https://onz.ee/"><img src="/assets/onzecki.avif" alt="onzecki"></a>
    <a href="https://michiru.org/manga/join.php"><img src="/assets/manga88x31.avif" alt="manga fanlisting"></a>
    <a href="https://jonathn.peanits.lol/"><img src="/assets/jonathn.gif" alt="my goat jon"></a>
    <a href="https://poyoweb.poyo.study"><img src="https://raw.githubusercontent.com/mrdapoyo/poyoweb-node/refs/heads/main/public/buttons/carl-is-a-cunt.png" alt="poyoweb"></a>
    <a href="https://joo.sh/"><img src="https://files.joo.sh/img/buttons/jooshRice.gif"></a>
    <img src="/assets/hai.gif" alt="haiweb">
    <a href="https://eyeorb.net/"><img src="https://eyeorb.net/site_button.gif"></a>
    <a href="https://electronica.nekoweb.org/"><img src="https://electronica.nekoweb.org/assets/electronicabutton2.gif"></a>
  </div>
</div>