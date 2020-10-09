---
title: "Creating an Obsidian Clipper"
date: 2020-10-09T10:08:19+02:00
draft: false

# Tags and categories
tags: [] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: [] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

As you might have distilled from previous post I am an avid user of [Obsidian](https://obsidian.md/). The application is under heavy development and their plugin API is not ready yet. Not wanting to wait, I set out to develop [some scripts](https://jplattel.nl/post/2020-08-14-obsidian-scripts/). In this post I wanted to share my latest project on an idea that is strongly connected to this as well.

Previously I used Evernote and often I would clip things from the web. With Obsidian this wasn't possible. I've been using [Quotebacks](https://quotebacks.net/) for getting clips into markdown and pasting them into Obsidian. But the longer I did that the more cumbersome it looked to me.

Thus I set out to develop a webclipper for Obsidian! One of the first things I came across is that a Chrome extension is not able to open `obsidian://` protocols (or any other than `http(s)://`), so I had to find a workaround for that. And I did, _woohoo_! I would redirect to a static page which would fetch data out of the url parameters and that page would open Obsidian for me! 

Without further ado, here's a quick screencast:

![Demo screencast of the Obsidian Clipper](/img/2020-10-09-screencast-obsidian-clipper.gif)

All the code and install manual is on [Github](https://github.com/jplattel/obsidian-clipper). This little project even has it own [landing page](https://jplattel.github.io/obsidian-clipper/)!