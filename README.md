# Yass G! aka Yet Another Static Site Generator
This is a crude static site generator implementation to power my personal blog, you're welcome to fork it and make your own.

# Why?
Well, because I didn't feel like surveying gazillions of static-site generators out there to find  which one I should use so I wrote my own instead. In addition to that, I was not after any fancy features other than converting markdown to html.

# It looks nice though...
Thanks, I've used the pubcss library by Thomas Park [pubcss](https://github.com/thomaspark/pubcss)
and also the Modern Computer font created by Donald Kuth originally for TeX, [computer-modern-font](https://github.com/dominictarr/computer-modern)

# How to use it?
* Create markdown file under `posts` directory with your content
* Update the `config.yml` file with the details of the post you've just written
* run `node compile.js` from the project root directory
* Script will create the new post under the `blog` directory and update the `excerpts.js` file
* Commit & Push and voila! :tada:

Simples right?


