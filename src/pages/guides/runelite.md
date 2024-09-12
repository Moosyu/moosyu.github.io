---
title: "running runelite off a usb flash drive"
layout: _layouts/guides-layout.njk
---

(this guide assumes you're using windows)

prerequisite: a flash drive with 1gb of space or more and wherever you are going to plug it in doesnt block runescapes servers

step 1: go to [temurin latest releases page](https://adoptium.net/temurin/releases/?version=11) and download the openjdk windows version in the zip format. then unzip and place it in your folder. i renamed it to java but you can name it whatever you prefer

![screenshot of runelite github releases](/public/assets/runelite_site.png)

step 2: go to the [runelite github releases page](https://github.com/runelite/launcher/releases) and download the jar version

step 3: make a bat file (the name doesnt matter) and in it place this script: 

```console 
D:\Java\bin\java.exe "-Duser.home=client-home -Djava.io.tmpdir=client-tmp" -jar D:\client-runelite\RuneLite.jar --nojvm
``` 

replace the begining D:\Java\bin\java.exe with your flash drives java.exe location and replace this part near the end D:\client-runelite\RuneLite.jar with your flash drives runelite.jar location. 

the quotation marks around "-Duser.home=client-home -Djava.io.tmpdir=client-tmp" are for if you are running it with powershell. if you are using command prompt they aren't necessary.

then run your new bat file to boot runelite off your flash drive