---
title: "should you use js?"
date: 2024-10-07
tags:
    - web
---

i think ive complained about this in ramblings before but even i dont read those so i felt like id talk about it here. a lot of sites on the indieweb try to subtly flex that they have no js on their site to varying levels of effect, im aware js will slow down your site, but you know what else will slow down your site? the user needing to load several uncompressed 2mb images on every page, which i see way too often in these sites who claim to not use any js. i dont think the lastfm widget is going to do as much damage as you think im sorry to say.

its not like im telling you to use js on every page or anything though, the page you're on right now has zero js and so do about half the pages on my site. i only use js when i feel like i'm forced, like for my reviews page the only way i could have done keyboard events is in js and i think 1kb of js really isnt going to change the users experience, especially on a page with like 50 high quality multi megabyte images that i forgot to lazy load until right now (whoops).

a location where js is often used when i should be that id like to complain about though is in webrings. onionring.js is a scourge and forcing people to load random js from your personal site and just trust you with it is a level of trust i dont have. this unfortunately forced me to learn how to use regex but shortish story short now i have to host my own versions of the webrings variable files and basically just moved the js to a different page, lot less js though so its still a win i think. cant have my home page getting more laggy, according to website carbon calculator im already killing 60 sea turtles on every site visit. thats all i had to say, and really i only made this blog post to complain about onionring. fuck you onionring.

![](https://i.imgur.com/oPxgolw.png)