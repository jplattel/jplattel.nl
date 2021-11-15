---
title: "Personal Taxonomy (Part 2)"
date: 2021-11-15T10:28:10+01:00
draft: false

# Tags and categories
tags: ["obsidian", "taxonomy", "notes"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology", "software"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

In the previous part I highlighted [how I managed my notes](https://jplattel.nl/post/2021-11-10-personal-taxonomy/) in folders. In this part I would like to explain a bit more on how make the decision between tags & a linked note. 

For people unfamiliar with the difference, this is a `#tag` and a bi-directional linked notes works like so: `[[Note Title]]`. At least, that's how it's implemented in [Obsidian](https://obsidian.md/). It might be different in other tools, but the ideas can stay the same.

I use tags in all of my notes, either in the frontmatter or within the content of the note. But what's my motivation to use a tag instead of a link? The basic rule I apply is this: "_Does this piece of information speak for itself?_". If the answer is yes, then I use a tag. If the answer is no, then I'll use a note. With a maybe I tend to create a tag as well, you always create a note at a later stage and do a search/replace. Since a tag is a low-effort way of creating interlinks I prefer it to a note. 

There's an additional piece of the puzzle that I haven't explained yet. Since Obsidian allows a user to create nested tags, for example `#parent/child` you can embed some in the tag itself. For example I'm using nested tags for locations: `loc`, organisations: `org`, profession: `pro` and subject: `sub`. That way I can categorize the tag I'm using. `#loc/utrecht` is my hometown for example, and if I'm talking to somebody about Obsidian I'll reference `#sub/obsidian` in the note. 

Most nested tags are colorized with a CSS snippet, for example, alle locations are colored green, while subjects are blue and organisations might be red.

So I'm using ordered folders for notes & catagorized tags to keep most of my information and data organization. Ofcourse that's what works for me! If you have a different system I'm always curious on how you solve this! 
