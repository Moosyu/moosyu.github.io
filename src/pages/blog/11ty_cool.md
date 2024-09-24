---
title: "11ty is really cool and i want to talk about it"
date: 2024-09-22
tags:
    - web
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css"/>

{% set prismCss %} {% include "../../css/prismTheme.css" %} {% endset %}
<style>
    {{ prismCss | cssmin | safe }}
</style>

im was gonna try to no make this too dev bloggy because every blog seems to be a dev blog already but i just really wanted to talk about my one true love, eleventy/11ty.

disclaimer: ive only used html and now 11ty so like for all i know react, next, astro, hugo etc might just be better than 11ty in every way but im just gonna talk about 11ty like its the best because its definitely better than html

you know how when you make an html page and you have to write one of these out for the 600th time:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

imagine if you didnt have to do that, imagine if all you have to do was type this:

```njk
---
title: "really cool page"
layout: "layout.njk"
---
```

and thats all you need to have a blank page like this ready to put content on (i mean youre just gonna get a blank page but you can stylise the template obv):

![screenshot of base without content](https://i.imgur.com/BkJyLQY.png)

it might sound insignificant, or perhaps even silly to be raving this much about something that boils down to saving one ctrl c ctrl v but we're just getting started. now lets say i want to edit my navbar, instead of needing to go through every page and change it you can just edit the template and your change will reflect on every page using that template. i know you can do this on normal html with jquery or iframes but i hate both methods and if i can avoid putting jquery in my site im going to take it. thats how youre currently on a javascriptless page right now.

11ty also has this really cool thing called [collections](https://www.11ty.dev/docs/collections/). collections, as the name implies are groups of pages and you can run through these groups in a loop to build things like lists of every blog post like we have here. pages can also be a part of multiple collections, allowing this page youre on right now to be in the "blog" collection which is being looped through on the blog home page to show every post as well as being in the "web" collection.

11ty also has [pagination](https://www.11ty.dev/docs/pagination/) which is how i build my review pages, it iterates over my json (though i think it could also use javascript files) files to create a table, then creates new pages once its gone through 50 elements. its very cool and its kind of crazy that you can pull something like that off so easily in 11ty, like straight up this is all the code it took to get a basic pagination working.

```html
---
pagination:
    data: comics
    size: 100
    alias: items
    addAllPagesToCollections: true
---
{% raw %}
<tbody>
    {% for item in items %}
    <tr id="{{ loop.index0 }}">
        <td style="text-align: center;">
            [{{ item.type }}]
            <br>
            ({{ item.name }})
            <br>
            <span style="{% if item.score < 1 %} color: #5e5e5e;
                  {% elif item.score < 3 %} color: #ff4c4c;
                  {% elif item.score < 5 %} color: #ff8888;
                  {% elif item.score < 7 %} color: #f0e68c;
                  {% elif item.score < 8 %} color: #7bc96f;
                  {% elif item.score < 10 %} color: #00cc66;
                  {% else %} color: #9d63d0;
                  {% endif %}">
            {{ item.score }}/10
            </span>
        </td>
        <td>{{ item.description }}</td>
        <td class="image-td">
            {% if item.image %}
            <img src="{{ item.image }}" alt="{{ item.name }}" onclick="toggleFullscreen(this)">
            {% else %}
            no image
            {% endif %}
        </td>
    </tr>
    {% endfor %}
</tbody>
{% endraw %}
```

this is the something that when i was using html completely had me stumped and just the making of the table generator took hours but 11ty let me do it in straight minutes (though it was probably easier as i had already made something like it in js).

11ty also has a bunch of really cool plugins to speed up your operations. the ones im using right now are [RSS](https://www.11ty.dev/docs/plugins/rss/) which automatically generates my RSS feed and [11ty syntax highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/) which you could probably take a guess at what it does. im also using the npm packages [clean-css](https://www.npmjs.com/package/clean-css) and [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser). at some point i want to figure out [11ty image](https://www.11ty.dev/docs/plugins/image/) which generates many images of various sizes to speed up page loads, which will do a lot more for my loading speeds than saving 20kb with my minifiers. it also caches so i wont end up with 6 hour long build times. [fetch](https://www.11ty.dev/docs/plugins/fetch/) also looks pretty cool but i dont really have a use for it right now as status.cafe doesnt seem to be rate limiting my constant reloads just yet.

the last thing i want to say before i end this suck off is that 11ty has really nice [markdown support](https://www.11ty.dev/docs/languages/markdown/), i write every blog post, guide and rambling in markdown, its a massive time saver and works perfectly. aside from markdown it seems to have [support for everything](https://www.11ty.dev/docs/languages/) on earth and if it doesnt have what you want you can make a custom template language. its insane. if you have any interest in website building i reckon you should at least give 11ty a shot, its really cool and pretty easy to get the hang of with the help of its [great docs](https://www.11ty.dev/docs/).

<p style="text-align:center;">(( ( update 23/09/24 ) ))</p>

uhh a day after writing this ive decided to add [@vscode/markdown-it-katex](https://www.npmjs.com/package/@vscode/markdown-it-katex) so i can write cool maths equations like this (without any client side js):

$\mathrm{e} = \sum_{n=0}^{\infty} \dfrac{1}{n!}$

its faster than mathjax (apparently, the jsperf link they gave to show that is dead) so ill just take their word for it, im using the vscode fork because it seems to be the only one getting updated and the original has a security vulnerability.

[i wrote a tutorial](/pages/guides/) on how to add it in my guides page. im also considering markdown-it-anchor, markdown-it-footnote and markdown-it-emoji so ill just end up with a fully kitted out 11ty markdown setup.