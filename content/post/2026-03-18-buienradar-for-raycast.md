---
title: "Buienradar plugin for Raycast"
date: 2026-03-18T17:12:29+01:00
draft: false

# Tags and categories
tags: ["buienradar", "raycast", "plugin"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

Simple tools are the best. As I'm living in the Netherlands one of the tools I frequently use is Buienradar, the weather forecast allows me to make a choice on when to hop on a bicycle (or not!). I used their app, the one from RIVM as well, but visiting the website always felt as the least pleasant way of using it. 

This afternoon I thought, wouldn't it be cool to have it in Raycast? A couple of prompts (with both Opencode & Claude) resulted in a super simple [Raycast plugin](https://github.com/jplattel/raycast-buienradar)!

![](https://files.jplattel.nl/2026/03/Wfwc6o.png)

It's up on [Github](https://github.com/jplattel/raycast-buienradar)! Run `npm install && npx ray build` and you're good to go! As for attribution, I link back to [Buienradar](https://buienradar.nl) directly, I surely hope that's enough! 

_I know I could add loads of options (using location, prediction graphs etc), I'll leave it to you (or an LLM!) as an exercise, feel free to make a pull-request as I lack the time and I'm happy with this result!_