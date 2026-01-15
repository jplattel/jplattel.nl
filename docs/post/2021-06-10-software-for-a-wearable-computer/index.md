---
title: "Software architecture for a wearable computer"
date: 2021-06-10
categories: ["technology"]
tags: ["wearable","keyboard","software","micropython"]
url: https://jplattel.nl/post/2021-06-10-software-for-a-wearable-computer/
---


As you can read [in previous posts](http://localhost:1313/post/2021-04-19-finalizing-hardware-for-a-wearable-keyboard/). I've spend the last year designing a wearable keyboard that would allow you to type while walking. When I finally soldered everything, checked the connections for no shorts I tried flashing [micropython](https://micropython.org/) on the `Wemo D32 Pro`'s that I use one didn't seem to work.. Luckily I had a replacement on hand _(learned that the hard-way, I'll always be ordering extra now!)_.

Before I want to dive into the software architecture, I wanted to explain why I don't went with [QMK](https://github.com/qmk/qmk_firmware/) or at least, not directly (more on that later!). While QMK is an awesome piece of software I wanted a bit more flexibility for my project. Interfacing with a SD, running a webserver and such are not things that QMK is meant for. I also wanted to explore Micropython a bit more in depth, since I've only done small projects with it. So, that's the way to go!

Before I wanted to start writing python I thought of some main ideas that I wanted the software to be:

1. **Configurability**. Since a 10-key keyboard is limited, I wanted as much configuration as possible for the end user. The way I'm going to achieve that is by allowing a extended QMK json file.
2. **Modular**, while I think I mostly use this keyboard to type, maybe someone else might think of it as a instrument, outputting Midi or OSC. Allowing users to write their own apps to interface with the core of the keyboard is very nice to have! I want the keyboard to function more like a computer or platform.
3. **Reducing the learning-curve**. Learning to type again with just 10 keys is hard. The software should help you when trying to learn this new platform.

Keeping in mind those 3 principles I set out tinker with Micropython and it's possibilities. This resulted in the following files/folders:

```sh
apps/ # All the applications are stored here
lib/ # Things like SD-card, bluetooth oled & keyboard interfaces reside here.
state.py # A shared state between all apps and between the hands.
boot.py # Run at boot, required by micropython
main.py # This is where the state is initialized and hands are connected
```

For now this will be the main structure, but it might change over time. When I got started initially I wanted to have both hands run the entire stack and connect but this resulted in conflicts between states. So the primary hand is keeping track of the state for now. I've also kept in mind that left handed people might want to flip keys, so you can configure both the primary/secondary hand & the dexterity. For now that yields enough flexibility!

That's it for now, I don't want to make long stories, with boring copy/pasting of code... Maybe I'll show you the typing in next post!
