---
title: "lexiqqq + 11ty github workflow"
date: 2024-10-03
---

{% set prismCss %} {% include "../../css/prismTheme.css" %} {% endset %}
<style>
    {{ prismCss | cssmin | safe }}
</style>

this probably isnt efficient or good but it works, dm me on discord if you want to scream at me or make an issue on github if you want to make it good. anyways if you want to use this workflow that builds your 11ty project and puts the files from _site into lexiqqq just follow these very simple steps

1. make a folder in the root of your project called .github, then make another folder inside .github called workflows, inside workflows make a yml file, i call mine build.yml

```
project root/
└── .github/
    └── workflows/
        └── build.yml
```

2. inside build.yml copy and paste this:

```yml
name: Deploy to Lexiqqq

on:
  push:
    branches: ["main"]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Use Node.js >= 14.x
        uses: actions/setup-node@v3
        with:
          node-version: 20.x

      - name: Install dependencies
        run: npm install

      - name: Build the site
        run: npx @11ty/eleventy

      - name: Setup SSH key
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.LEXIQQQ_PRIVATE_KEY }}" > ~/.ssh/private.key
          chmod 600 ~/.ssh/private.key
          ssh-keyscan lexiqqq.com >> ~/.ssh/known_hosts

      - name: Copy _site to Lexiqqq with SCP
        run: |
          scp -i ~/.ssh/private.key -o UserKnownHostsFile=~/.ssh/known_hosts -o StrictHostKeyChecking=no -r _site/* YOURLEXIQQQUSERNAME@lexiqqq.com:/home/YOURLEXIQQQUSERNAME/public_html/
```

3. inside that document replace "YOURLEXIQQQUSERNAME" with your lexiqqq username on the last line (your username is the name before .lexiqqq.com on your url)

4. now here it gets a little complicated, go into your github repo, go to settings, click the secrets and variables dropdown on the right and click actions. in the actions page you're going to want to click "New repository secret".

![](https://i.imgur.com/3JxV4Eq.png)

5. in the new repository secret menu for for the name write LEXIQQQ_PRIVATE_KEY. for the secret you're going to want to open a terminal window, run this command (but replace your_email@example.com with your actual email, this is a comment that is associating the key with your email so you can identify it):

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

now just press enter when you are prompted with the storage location and a passphrase, just press enter for all of these without typing anything in.

6. once you've done that run this command

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub YOURLEXIQQQUSERNAME@lexiqqq.com
```

this is copying your public key (specified with the .pub) to your lexiqqq server, make sure to add your lexiqqq username instead of just leaving it as "YOURLEXIQQQUSERNAME" before running this command!

7. if you want to make sure this worked try running

```
ssh -i ~/.ssh/id_ed25519 w@lexiqqq.com
```

it should ssh you into your lexiqqq account without a password prompt appearing

8. last step!! if youre on linux(or maybe mac too) run

```
cat ~/.ssh/id_ed25519
```

if not go to where your ssh keys were just saved to ( ~/.ssh by default on unix based or on windows i think its C:\Users\PUTYOURUSERNAMEHERE\.ssh), find the file "id_ed25519" NOT "id_ed25519.pub" and copy the contents, it should look something like:

```
-----BEGIN OPENSSH PRIVATE KEY-----
.....................................
.....................................
.....................................
.....................................
...................................==
-----END OPENSSH PRIVATE KEY-----
```

(but instead of dots a random scramble of characters), copy that INCLUDING the -----BEGIN OPENSSH PRIVATE KEY----- and -----END OPENSSH PRIVATE KEY----- into the "Secret *" of your LEXIQQQ_PRIVATE_KEY secret you started making in step 5. it should now look like this without the massive red square:

![](https://i.imgur.com/tpaisrn.png)

then just press add scret

9. profit!! that should be it, now any commits you make to the repo will auto update your lexiqqq site.