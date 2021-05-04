---
title: "Rhizomatic notetaking"
date: 2021-05-04T08:15:07+02:00
draft: false

# Tags and categories
tags: ["rhizome", "deleuze", "guattari", "notetaking", "notes", "obsidian"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

The past few weeks I've been exploring the philosophy of Deleuze & Guattari in which I focus mostly on the [rhizome](https://www.wikiwand.com/en/Rhizome_(philosophy)). As the rhizome doesn't have a start or end, grows from within itself and into multiple directions I saw similarities on how I started to take more notes recently.

I've been using my own [Obsidian Clipper](https://jplattel.nl/post/2020-10-09-obsidian-clipper-chrome-extension/) chrome extension to clip short amounts of text and those are automatically tagged with `🌱`. Next I have a [Obsidian Query Language](https://jplattel.nl/post/2021-01-28-obsidian-query-plugin-published/) block that's set up to track the last few seedling notes that I've created:

````
```oql
name: Last created daily notes
query: {
	tags: "'🌱",
	content: "![["
}
template: "table"
sort: 'created'
badge: false
limit: 10
fields: ['title', 'created', 'tags']
```
````

This block is located in my workbench note, allowing me to quickly reference the last clipped notes that are seedlings and that not yet linked to anything. The last part is interesting since you want to interconnect each note. 

*(funny thing the similiarity between `note` & `node` in this case!)*

I've created a special workspace for processing the seedlings into the rhizome. Here's what the view looks like:

![](/img/rhizomatic-notetaking.png)

It allows me to quickly interconnect new seedlings so the notes get more connected and allowing thoughts to develop. The workbench both functions as a feed for new items as well as a place to quickly jot down ideas. The search window will also provide some seedlings except they are sorted from old to new, dredging the depths of my notes from the oldest ones first! 

More and more I'm getting the feeling that the different workspace layouts are something worth exploring with custom plugins, let's hope the API's for that are available soon!