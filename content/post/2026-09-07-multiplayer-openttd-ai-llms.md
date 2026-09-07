---
title: Multiplayer OpenTTD with LLMs
date: 2026-09-07T19:09:24.000Z
draft: false
tags: llm, ai, openttd, software
---

In a previous post I showcased a demo of an LLM getting a bit of a gamestate from OpenTTD. While the demo worked it really didn't live up to the idea of having an LLM drive a organisation within OpenTTD. 

![openttd-llm-logo](https://files.jplattel.nl/2026/09/tqX7h4.png)

Over the last couple of weeks I spend some tokens to develop this idea a bit more and see what I could do... I ended up with an improved state engine, better interface, multiplayer/multi-llm support and a custom web dashboard!

### Improved state engine

![openttd-llm-state](https://files.jplattel.nl/2026/09/zkI7Xp.png).

It turned out the logs were a pretty good way to pipe data in & out... But the LLM ended up lending a lot of the building infrastructure from other scripts.. My first thoughts didn't really agree with this, but in the end each LLM now has the same tools available.. routing in a tile based world for an LLM is way to complicated, better to use the in game alternatives! 

### Multiplayer llm / interface

With the improved interface it's now possible to support multiple llms in a single game. You can configure them before starting or while the game is running. Each LLM get its own gamestate but have the same tools available to route and build. 

*I did notice that having a LLM with a lower latency has a better chance in game, so I might put them on a seperate timer to equalize the chances...*

### Custom web dashboard

Getting a better state of each LLM gave me the idea to create a web dashboard. What started of as an idea ended up as a launchpad... you can now configure your llms when starting (and playing the game!)

![openttd-llm-web](https://files.jplattel.nl/2026/09/9YlHww.png)

All the updates are now live on [Github!](https://github.com/jplattel/openttd-llm) for you to enjoy!