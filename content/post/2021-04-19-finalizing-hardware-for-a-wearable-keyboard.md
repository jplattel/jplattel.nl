---
title: "Finalizing the hardware for a wearable keyboard"
date: 2021-04-19T21:01:37+02:00
draft: false

# Tags and categories
tags: ["technology", "hardware", "keyboard", "wearable"] # Example: `tags: ["machine-learning", "deep-learning"]
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

In [a previous post](http://jplattel.nl/post/2021-01-20-wearable-keyboard-prototypes/) I've shown physical prototypes of a wearable keyboard I'm developing. The goal of this keyboard is to provide me with a way to type while walking or just standing/sitting somewhere. I want to blind-type notes while keeping my attention at other things. 

Most of the comments I get have to do with _why I don't use dictation._ There are several reasons for that, namely I'm taking my notes bilingual (English & Dutch) and I don't want to shout around my ideas while being nearby other people, as this might be annoying or even rude... 

As a recent post by [Stavros Korokithakis](https://www.stavros.io/posts/keyyyyyyyys/) reached Hacker News I thought I wanted to write an update on where I am at with my prototype. So without further ado some pictures:

![](/img/wearable-keyboard-1.png)

Right now I'm on **Prototype 10** of the current hardware, which is mature enough for me to go into the area of software. I only need to wiring things up on the inside to get the buttons to work. **Prototype 10** will have the following:

 - 10 keys as input
 - 2 OLED screens
 - 1 SD-card for configuration & note keeping
 - A bluetooth / ESP-NOW interface for communicating as a mesh with other devices.
 - Magnets! (for coupling and later a case!)

![](/img/wearable-keyboard-3.png)

The magnets for now function as a way to group the two keyboards together. In a future version I'd imagine them also triggering a reed-switch to turn of the device. There's also more then enough room for an NFC chip to automate stuff like pairing with bluetooth.

![](/img/wearable-keyboard-2.png)

The small little rectangles on the inside are the two OLED-screens that gives us a small interface for easing the learning-curve and even offer an interface to your notes. Maybe one screen can give hints on what you're typing and the other show the context of the current sentence.. There's a lot of possibilities!

As for a name, that's still undecided! I'll hope to show you more about the software side as soon as I get the final soldering done! 