---
title: "Learning to type again (or how to chord)"
date: 2026-04-01T09:09:27+02:00
draft: false

# Tags and categories
tags: ["chording", "monkeytype", "midi", "circuitpython", "wandering-computer"] # Example: `tags: ["machine-learning", "deep-learning"]
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

Now the software and hardware of [wandering.computer](https://wandering.computer) have reached a state at which it feels stable, so I started with the next step, learning to type again. In this blogpost I'll share some of my findings and solutions I've come across along the way...

The main idea of wandering.computer is to be freed from the desk as a way to write. (I still use transcription, each has their use-cases!). However, when learning to chord I wondered if I could skip straight to learning it blindly? If I wanted to do that the screen in each hand isn't really helping... I needed a way to look at a screen... So back to the computer it was.

# The dongle

Each side communicates over ESP-NOW protocol, so I figured the easiest way was to create a dongle that listens in as well! With the help of Claude I set up a dongle with a pretty interface that showcases the characters per minute as well as a real-time view of which button is pressed. Connecting it to the computer to function as a keyboard is pretty easy too: just emulate a HID keyboard interface (something CircuitPython does really easily!)

> If I decide to open-source this keyboard I'll publish the source-code for the dongle! 

That worked for a while, but I wanted an overlay on my screen so I could practice my chording on Monkeytype and I ran into an issue: key presses by the dongle could signal only on key release, while I wanted my overlay to show key press (and release without typing a key). So I switched the dongle to midi signals and let the overlay function as an interface to type with. 

This allowed me to create a very functional overview with hints on which letters are possible. Here's a screenshot of what it looks like on Monkeytype:

![](https://files.jplattel.nl/2026/04/4mvmIh.png)

# On learning

When working on [one of the first prototypes (in 2021!)](http://jplattel.nl/post/2021-07-03-learning-to-write-new-keyboard-layout/) I wrote how orientation matters for muscle memory, in the past weeks this has been made more clear again and again. I would practice for 15 minutes, turn my hands and lose all muscle memory instantly. This is sometimes described as a “posture-dependent motor program.”

Practicing on a more fixed position hopefully allows me to chord blindly with confidence, I also made the mistake early on to start learning with the entire alphabet at once... this overload hinders my progression as well. It's good to take a step back!

If you're wondering if it still functions as a stand-alone device, yes! I recently wrote the firmware to store what you type on the SD card, from which you can pull when restarting the device in sharing mode (it'll create its own network!)

