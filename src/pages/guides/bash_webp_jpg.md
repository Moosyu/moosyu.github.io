---
title: "convert webp to jpg bash script"
layout: _layouts/guides-layout.njk
---

go to the folder where the files you wanna convert are

enter this script = "for x in ls *.webp; do ffmpeg -i $x ${x%.webp}.jpg; done" (dont add the quotations)

done :sunglasses: (if you get the ffmpeg: command not found error you need to get ffmpeg. go [here](https://ffmpeg.org/download.html) to get it.)