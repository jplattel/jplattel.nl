---
title: "Obsidian Query Language plugin published"
date: 2021-01-28
categories: ["technology","software"]
tags: ["obsidian","typescript","javascript","plugin"]
url: https://jplattel.nl/post/2021-01-28-obsidian-query-plugin-published/
---


I've just published my first plugin for [Obsidian](https://obsidian.md/)! As a __huge fan__ of the software the possibility of writing your own plugins to work with the data you create is just awesome! I've been using Obsidian for over 8 months now and one of the first things I created was [the clipper](https://jplattel.nl/project/obsidian-clipper/).

Since a few months Obsidian now allows users to write plugins in Typescript. While I'm not that versed in the *Typescript/Javascript* verse I did manage to write my first plugin! (well, technically not the first, but the only one published!)

You can download the plugin through the community plugins in Obsidian or install it manually [from Github](https://github.com/jplattel/obsidian-query-language).

The plugin allows you to create query blocks and use the Obsidian vault as a data-source, gathering knowledge about your notes. For example, this is the query I build to list the last 5 daily notes in Obsidian:

````yaml
```oql
name: Last 5 created daily notes
query: "'100 Daily/"
template: "list"
sort: "created"
limit: 5
```
````

While developing this plugin I actually got thinking more about storing queries itself within the data. Normal database's don't really allow you store queries within the data itself. Sure, it's possible to store queries and re-use them. But that's  the same as embedded within the data itself. 

This pattern is interesting as the query context is often relevent for the output, and storing the query within the data results in having both in the same place, allowing you to connect the dots quicker! 

>   Storing queries within the data itself joins the query within the context, allowing users to [grok](https://www.wikiwand.com/en/Grok) the note quicker!

For now the first version of the plugin is available, but after talking to some users there are more venues to explore, for example having mulitple queries or even allowing other plugin to use the query engine! 
