---
title: "Mobypicture Export"
date: 2011-04-10
tags: ["Data","export","moby","mobypicture"]
url: https://jplattel.nl/post/2011-04-10-mobypicture-export/
---

I love [Mobypicture](http://www.mobypicture.com/). It's the service I use to post my pictures onto Twitter, Flickr and Facebook. It makes uploading photos from my mobile phone as simple as it could possibly be. Even better, the service is free to use, unlike Flickr which only allows access to last 200 images if you go with their freemium model. But sadly using Mobypicture isn't without downsides. There is no export functionality as of yet.

So I decided to roll my own with Python and [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/). And behold, within an hour I had a fully functional script exporting all my pictures from my old account. The code isn't the prettiest or the quickest, but is does it job fairly well. If you are looking to export all pictures from your Mobypicture account, you can use my script. It does require you to have python installed with the BeautifulSoup module.

I've made a [gist from the script](https://gist.github.com/912685), so you can check the code! If something goes wrong, let me know in the comments. It could be Mobypicture that changed the layout so the parser doesn't work anymore..

`python scraper.py put_your_username_here`

_[edit: Due to the relative time that mobypicture the first filenames don't appear correct, but the export works]_

_[edit 2: Here's an [updated script](https://gist.github.com/jplattel/8181849) that works with their API.]_
