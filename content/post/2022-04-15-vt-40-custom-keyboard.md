---
title: "Creating VT-40 custom keyboard"
date: 2022-04-15T11:15:17+02:00
draft: false

# Tags and categories
tags: ["making", "diy", "electronics", "pico", "raspberry"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

I'm no stranger to [making keyboards](https://jplattel.nl/post/2020-11-11-bluetooth-sudoku-keyboard/) and while I'm tinkering with creating a [wearable keyboard](https://wandering.computer/) I've stumbled upon many other builds of people that do interesting stuff.

I've been browsing the usual reddits ([r/mk](https://reddit.com/r/mechanicalKeyboards/), [r/ErgoMechKeyboards](https://www.reddit.com/r/ErgoMechKeyboards/) and the likes) I stumbled upon a nice looking project that would get me into ortholinear... I wanted a keyboard different enough that it's worth building. So I ended up with the [VT-40](https://github.com/vladantrhlik/VT-40/). 

[My brother](https://ikbenke.es/) ordered the pcbs and components, I ordered the keycaps & switches since. With a few weeks passing and a couple of hours soldering stuff together, here's the end result:

![VT-40 Custom Keyboard](/img/vt-40-keyboard.jpeg)

Compared to the normal VT-40, I've added some things which I thought where missing, for example a cover for the microcontroller as well as a bottom plate (of which I have two, one for the blue accent and one TPU, both printed on my Mk3S+ (now featuring a [Revo](https://e3d-online.com/products/revo-six)!).

Once I've got KMK working on the [Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) it turned out the provided code wasn't really supported due to the encoders working differently and the keycodes being different. So I've created [my own Github repository](https://github.com/jplattel/VT-40/) including the `.dxf` files for the microcontroller cover as well as the bottom plates and the new code!


So if you're interested in building your own, I can highly recommend the keyboard as it can be handsoldered and you can easily tinker around with it. 