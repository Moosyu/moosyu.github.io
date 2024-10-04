---
title: "lexiqqq + 11ty github workflow"
date: 2024-10-03
---

{% set prismCss %} {% include "../../css/prismTheme.css" %} {% endset %}
<style>
    {{ prismCss | cssmin | safe }}
</style>

this probably isnt efficient or good but it works, dm me on discord if you want to scream at me or make an issue on github if you want to make it good. anyways if you want to use this workflow that builds your 11ty project and puts the files from _site into lexiqqq just follow these very simple steps

# 1. folder setup:

make a folder in the root of your project called .github, then make another folder inside .github called workflows, inside workflows make a yml file, i call mine build.yml

```
project root/
└── .github/
    └── workflows/
        └── build.yml
```

(project root is the folder that _site, node_modules, package.json etc are in.)

# 2. defining the workflow:

inside the build.yml file copy and paste this:

{% raw %}
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
{% endraw %}

# 3. configuring the workflow

inside that document replace "YOURLEXIQQQUSERNAME" with your lexiqqq username on the last line (your username is the name before .lexiqqq.com on your url)

# 4. setup up github repo secrets

now here it gets a little complicated, go into your github repo, go to settings, click the secrets and variables dropdown on the right and click actions. in the actions page you're going to want to click "New repository secret".

![](https://i.imgur.com/3JxV4Eq.png)

# 5. generating your ssh key

in the new repository secret menu for for the name write LEXIQQQ_PRIVATE_KEY. for the secret you're going to want to open a terminal window, run this command (but replace your_email@example.com with your actual email, the email bit is a comment that is associating the key with your email so you can identify it):

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

(keep the quotations in your command, also the email doesnt need to be your lexiqqq email just use your actual one.)

press enter when you are prompted with the file name and a passphrase leaving them blank. you can still follow this tutorial (probably i havent tested it) if you add a passphrase but it might get more complicated and you'll probably have to modify the workflow, same with a file name. 


# 6. copying your public key to lexiqqq (open the dropdown depending on your OS)

<details>
<summary><p style="display: inline;">linux</p></summary>

run this command that copies your public key (specified with the .pub) to your lexiqqq server, make sure to add your lexiqqq username instead of just leaving it as "YOURLEXIQQQUSERNAME" before running this command!

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub YOURLEXIQQQUSERNAME@lexiqqq.com
```

</details>

<details>
<summary><p style="display: inline;">mac</p></summary>

if you're on mac you may need to run this first:

```bash
brew install ssh-copy-id
```

then run this command which copies your public key (specified with the .pub) to your lexiqqq server, make sure to add your lexiqqq username instead of just leaving it as "YOURLEXIQQQUSERNAME" before running this command!

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub YOURLEXIQQQUSERNAME@lexiqqq.com
```

(this is untested, if youre on mac and this works please tell me!! if this doesnt work just use the windows option it should work universally)

</details>

<details>
<summary><p style="display: inline;">windows</p></summary>

run this in a terminal and copy its output:

```bash
cat ~/.ssh/id_ed25519.pub
```

what you copied should look something like this:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDbKm9EjflQkNtlb7vTud7XmMfObOlTFOupKtFHzrjJk your_email@example.com
```

next ssh into lexiqqq in a terminal with this command:

```bash
ssh YOUR_USERNAME@lexiqqq.com
```

this should prompt you to enter your lexiqqq password, do it.

once you've logged run this:

```bash
mkdir -p ~/.ssh
```

then run

```bash
echo "YOUR_SSH_KEY" >> ~/.ssh/authorized_keys
```

(copy and paste the ssh key that you just copied to your clipboard into the YOUR_SSH_KEY spot)

then run 

```bash
chmod 600 ~/.ssh/authorized_keys
```

and 

```bash
chmod 700 ~/.ssh
```

this is giving authorized_keys read and write permissions and giving the ssh directory read, write and execute permissions.
</details>

# 7. (optional) verifying your ssh access

exit out of the ssh and run:

```bash
ssh -i ~/.ssh/id_ed25519 YOUR_LEXIQQQ_USERNAME@lexiqqq.com
```

it should ssh you into your lexiqqq account without a password prompt appearing.

# 8. adding your private key to github secrets

this is the last step !! run this command (if you get the no such file or dictionary thats because you are still in the ssh, exit ssh first):

```bash
cat ~/.ssh/id_ed25519
```

the output should look something like:

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

then just press add secret.

# 9. profit!!

any changes you make to your github repo will be built and the contents of the build uploaded to your lexiqqq site !!