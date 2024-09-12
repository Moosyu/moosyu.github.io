---
title: "making a nekoweb elements.css file"
layout: _layouts/guides-layout.njk
---

![nekoweb screenshot](https://i.imgur.com/6Nu9YGf.png)

it kind of has a wacky format but i found the best way to do it. stealing !!

go on any nekoweb site, append /elements.css to the end of their domain and figure out how to do stuff. (eg if you want https://moosyu.nekoweb.org you make it https://moosyu.nekoweb.org/elements.css)

for example heres what mine looks like

```css
.site-box{
    background: url("https://moosyu.nekoweb.org/assets/tvsmh.png");
    background-size:cover;
    color: #c6a0f6;
    width: 100%;
    height: 100%;
    font-family: Tahoma;
    font-size: calc(0.6vw + 0.6vh);
    user-select: none;
    cursor: url(https://moosyu.nekoweb.org/assets/face_pull.png),
    auto;

}
.site-box .sitefeature {
    display: none;
}
.site-box>a>p{
    color: white;
    width:100px;
    position:absolute;
    left: 45%;
    top:50%;
    word-break: break-word;
    background-color: blue;
}
.site-box>a>span:hover {
    color: white;
    transition: 0.5s;
}

.site-box>a>span {
    color: orange;
    filter: drop-shadow(1px 1px 0 black) drop-shadow(-1px 1px 0 black)
    drop-shadow(0 -1px 0 black) drop-shadow(1px 0 black);
}
.site-box > a {
  display: block;
  height: 100%;
}
```

i was able to create this beautiful piece of art !!

![epic elements.css](https://i.imgur.com/byTmRmZ.png)