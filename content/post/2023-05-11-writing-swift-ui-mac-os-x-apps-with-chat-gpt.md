---
title: "Writing SwiftUI apps With Chat-GPT"
date: 2023-05-11T21:52:29+02:00
draft: false

# Tags and categories
tags: ["chat-gpt", "ai", "development", "software", "mac", "finder", "swiftui"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

[ChatGPT](https://chat.openai.com/) is all the rage nowadays. Personally I've used it quite a few times and professionally as a software developer it's interesting to use. I don't fear for my job/knowledge (yet!) as it's mostly integrations and not of the shelf code... (I haven't tried the hardware space in Chat GPT yet..... [paperclips might be optimized](https://www.decisionproblem.com/paperclips/index2.html)..) ✌️

To figure out how useful it might be for me, I embarked on a journey together with ChatGPT to build a piece of software that would solve issues that I'd had with the Mac OS X Finder for a while. The shortcomings of Finder can be summed up with:

- No easy column view (split window takes to long to arrange and doesn't offer any flexibility with a window manager)
- Sorting is applied to all open windows, while I might have a folder that is better viewed on a creation date (photos for example!)
- If you have more then a couple of windows open, copy/pasting files becomes a hassle and a mess... 
- When re-organizing files it's hard to keep an overview (related to the one above)

So I opened XCode, choose SwiftUI for a mac application and (I did it before a couple of times and after a couple of hours of tinkering I felt defeated..). I felt confident I could at least make it towards a simple app.. And low and behold after a couple of evenings I had an interface that would show folders in a column view... 

Right now I'm about ~40 hours in and I'm adding small features like cross copy/pasting across columns, keeping a selection as well as opening folders as columns if right-clicking with a command key pressed. Here's what it looks like! 

![Example view of Finder Favorites](https://files.jplattel.nl/2023/05/fE8HF3.png)

It even has it's own logo! I simply changed a fill color with a somewhat original icon, feeling pretty golden (pun intended 😬)

![Finder Favorites icon](https://files.jplattel.nl/2023/05/W5RHEz.png)

The best value is gained from Chat GPT if you know how to ask questions, even though I'm not familiar with SwiftUI the programming experience that I have makes it easy to fix small logic errors. It helps that I know how to interpret error messages so I can instruct ChatGPT how to solve them. The downside, since ChatGPT is only fed with data from 2021 it's somewhat limited in the most recent changes in SwiftUI... Nevertheless it's pretty awesome!

_Keep an eye on [the project page](https://jplattel.nl/project/finder-favorites/) as I might update with more information and possible a repository or `.dmg` installer! (If I can make that work with ChatGPT!)_