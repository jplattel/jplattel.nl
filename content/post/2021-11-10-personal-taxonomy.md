---
title: "Personal Taxonomy (Part 1)"
date: 2021-11-10T10:07:55+01:00
draft: false

# Tags and categories
tags: ["obsidian", "taxonomy", "notes"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology", "software"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

While explaining and introducing [Obsidian](https://obsidian.md) to people I've noticed that the free form way of setup allows for so much flexibility. This results in an big amount of questions on how you would structure the links, tags and your vault. And while there are some solutions like PARA or LYT, I think the best system is the one you create yourself. 

One of the main reasons is that you'll learn a lot about how you think about the data relevant to you. This in turn forces you to think about how you structure the notes around it. 

Personally I created a modified [Johnny Decimal](https://johnnydecimal.com/) system for number and sorting notes. While not all notes are numbered, the main folders (and some notes in those) are. Here's a quick overview on how I structure my notes. *(Please note, this will always be a work in progress!)*

```markdown
000 System/         # Overview pages, general lists are kept in here
100 Daily/          # My daily notes, grouped by year & month
200 Projects/       # All my projects
300 Work/           # Data on clients
400 Persons/        # A simple CRM that's currently not synced or anything...
500 Notes/          # Clipped notes and other things that don't abide to any structure
~                   # Space for more here...
700 Misc/           # Miscellaneous things, like recipes, draft blogposts and others.
800 Automations/    # Templates, scripts for automation and more.
900 Archive/        # Everything else I don't use any more, an export from Evernote etc.
```

The numbering of projects and work continue within the numbering. For example a project would be named: `201 Example Project`. I use the same label in Omnifocus for the project naming, allowing me to automatically connect the right note with a script that pulls in daily completed todos. This is a small example on how I connect different apps together while they don't share an API. 

The projects folder on my computer also starts with `2`. This way if I'm talking about a project most of things I interact start with 2, this small and unseemingly annoying pattern does allow for structuring across applications and folders, since all things just simply start with `2`. The same applies for Archive (`9`), System (`0`) and at times others.

So this will make it clear why this folder structure makes sense to me, it's all about bridging things and naming unification. Again, this works for me, but you might have different requirements that might need another setup!

In the next part I'll explain on how I decide between a note and tag (and how I use subtags!)

*[Continue reading with part 2](https://jplattel.nl/post/2021-11-12-personal-taxonomy-part-2/)*