---
title: "An LLM plays OpenTTD"
date: 2026-01-22T19:59:37+01:00
draft: false

# Tags and categories
tags: ["llm", "ai", "openttd", "python", "squirrel"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

After being inspired by the post that shows [Claude Code playing RCT2](https://labs.ramp.com/rct), I'd imagine something like that, but for [Open Transport Tycoon Deluxe (OpenTTD)](https://www.openttd.org/). OpenTTD readily available and there's been some ways of making AI / Bots but they're pretty much carved in stone once you implement them. There is no way to have them dynamically change their code or ways of work while running. (afaik!)

![OpenTTD](https://files.jplattel.nl/2026/01/Uu9w33.png)

And my goals was to have an LLM tried instead. It would be pretty cool to have a LLM drive a company within OpenTTD. So the first thing I came up with is a LLM generating its own code files that will could reloaded every time through the CLI: 

> The LLM writes the code and it could have the total freedom of how the code looks. That didn't work out because half of the time we wouldn't compile the other half or it would crash OpenTTD. The subset of the Squirrel language that OpenTTD uses isn't very big. It makes sense though, to have it as small as possible. But this resulted in the LLM really trying to do things right, but without any feedback it wouldn’t know if the code was good enough... 

I felt like this method isn't going to work out.. So I started to look at other options, with the help of LLMs of course. But Opus 4.5 wasn't doing it, any other LLM with a plan mode or anything that I tried was also failing at it because there was no easy way to get code/instructions in and out the game.

After some looking around and tinkering I had a look at the gamescript options, I had a look at the CLI interface. But nothing really would point me to a more dynamic way of steering an AI that's presently running in the game. I thought I had a solution by using signs but that also didn't work because the moment I override them they become assigned to the owner that last edited them. In that case the previous owner, which in this case would be the AI, would lose ownership and I couldn't find it anymore. Um so that didn't work out either... 

So how do we want to solve this? Taking a step back I noticed that imported `.nut` files are loaded during runtime. So if they change while the AI was running it could pick up the changes or commands. This would result in the rough architure of having a LLM generate a series of commands that the in-game AI would then execute. Funneling the data of these commands out could be done through the logfile. So it becomes a circular process (image, one-shot with ChatGPT):

![image.png](https:///images.jplattel.nl/obsidian/image.png)

After some more tinkering I became clear it's better to parse the logfile myself with a script and construct a gamestate outside of OpenTTD. This way I could better control and structure the context, allowing the LLM to focus on generating the commands based on the gamestate. Outputting the commands to a a structured format allows us to guarantee that OpenTTD doesn't crash. The upside is that we could still use internal path finding algorithms that are available within the OpenTTD ecosystem.

Right now this exists as a proof of concept. It hooks up the LLM throug the logs/squirrel lang, reads out game state like map dimensions, bank balances, but that's it! I've put up the code on [GitHub](https://github.com/jplattel/openttd-llm) if you're interested! And looking into the future I can imagine there might be an OpenTTDBench for LLMs ✌️

_Part 2 might be published soon, I'll hope to have a video up by then!_