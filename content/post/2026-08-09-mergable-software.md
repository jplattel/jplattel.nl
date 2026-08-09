---
title: "Mergable software, or how to drive ephemeral agent browsers"
date: 2026-08-09T20:57:13+02:00
draft: false

# Tags and categories
tags: ["llm", "browser", "obscura", "cdp"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

I've been using [sockpuppetbrowser](https://github.com/dgtlmoon/sockpuppetbrowser/) for a while in some of my projects. The easy method of opening a CDP connection and getting a browser (which scales to a couple of jobs) is nice enough for projects of mine. While also keeping each proces seperate.

However the repo has grown stale and some bugs are nagging me (crashed browsers & memory issues). I've hotfixed them in my own branch, but when I came across [Obscura](https://obscura.sh/) I knew I had to try to merge the two! (I know `obscure serve  --workers N`, but those are sticky, I wanted something more ephemeral!)

Thus `distroscura` was born. The idea of sockpuppetbrowser combined with a `obscura serve` for each fresh connection. An LLM (composer 2.5) did all the work, I just pointed it to the two repositories and gave some additional instructions on what I would like from each... About 15 minutes later I could include the docker image into my project and was up and running! (check it out [on Github here](https://github.com/jplattel/distroscura)!)

Getting an LLM to write software ain't new, but the idea of merging two repositories did give me some thoughts on merging/fusing/composing software... At what level are we integrating? 
