---
title: "Reflecting on 1000 Daily Notes in Obsidian"
date: 2023-03-27
categories: ["technology"]
tags: ["obsidian","writing","journaling"]
url: https://jplattel.nl/post/2023-03-27-reflecting-1000-daily-notes-obsidian/
---

I've been journaling for a thousand days using [Obsidian](https://obsidian.md). A habit I've been meaning to do for a long time. Until I found Obsidian I just couldn't make it work, but it does now! In this post I wanted to reflect on my daily notes and some ideas that I've been thinking about the last few days.

> If you're curious about my current daily note template, I've created a [gist on Github](https://gist.github.com/jplattel/2728178ea89224acff91349c97d1b29b).

## The evolution of the daily template
My daily note template changed over time and there are two things which mostly influenced the changes I've made. The first reason I modified is was due to the fact I'm pulling in from other sources, but those sources changed... For example I switched my todo application and (Omnifocus -> Todoist) and I've removed Timing.app from my workflow. 

Most plugins for Obsidian are just a window into the other application, not a historical copy. That means if you switch things around, the historical copy gets removed... I didn't want this, so I opted to create a couple of plugins that simply pull historical data (from my calendar, todolist and others) and hardcode it into my daily note. No matter how my workflow changes, I've got a permanently accessible copy of it. 

The other thing I've discovered over time was the use of nested tags. For example I now use tags prefixed with  `#loc/` to mark a location, the same for profession: `#pro/`, network: `#net/` and `#org/` for organisation (if it's not a client). This is a small change, but it allows me to group all location tags for each journal for example, creating an overview of all locations I've visited in the past month for example. 

## Future ideas on journaling 
When [Marco Bogers](https://www.workinflow.nl/) showed his Obsidian vault and talked about a more dynamic daily note template it inspired thoughts on how to achieve such a thing. Templater might be able to determine what kind of day you're facing, for example depending on what type of meetings that are scheduled on the calendar, could it offer a place to put notes, or when you're free it could inspire you with a couple of quotes or questions. So I'm thinking a bit more and if I implement it you might see it in a next post!

Since I've now got a set of data to work with, are there any trends I'm able to discover? With just dataview or my own query plugin it's really basic to just make tables. How could I expand on that and make it more interactive or explorable? I think there's a lot of untapped potential here... but one of the things I'm considering is training a large language model with my daily notes so I'm able to ask it questions 🤖.. 



