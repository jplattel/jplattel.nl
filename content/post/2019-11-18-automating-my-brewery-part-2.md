+++
title = "Automating my brewery (Part 2)"
date = 2019-11-18T21:55:31+01:00
draft = true

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["beer", "automating", "projects", "DIY", "brewer", "brewing"]
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
# Use `caption` to display an image caption.
#   Markdown linking is allowed, e.g. `caption = "[Image credit](http://example.org)"`.
# Set `preview` to `false` to disable the thumbnail in listings.
[header]
image = ""
caption = ""
preview = true

+++

In the [first part](https://jplattel.nl/post/2019-11-17-automating-my-brewery-part-1/), I looked at the frame/enclosure for everything that we need to automate my own brewery. In this part I wanted to show which parts are on the inside based functionality:

*   __Backside:__ 
    *   230V IN: Voltage in, the main power supply for all devices in the enclosure
    *   230V OUT: Switched by the solid state relay based on the PID algorithm
    *   RJ12 Female connecter: Input for the temperature sensor that is used by the PID algorithm as input
*   __Frontside:__
    *   Traffic-light interface: lights to indicate what is on.
    *   LCD Display (16x4): The main interface on which you can see what is happing and change settings.
    *   4 Arcade buttons: the main input device for controlling everything.
    *   Twist dial: controlling the speed of the pump.
    *   Pump input & output: Connections for the pump.
*   __Inside:__
    *   Solid state relay: switching on the main heating element (230V OUT)
    *   Pump power adapter: the pump has it's own power converter
    *   Wemo D1 Mini lite: the main brains of the device, running micropython
    *   5 volt adapter: Used by the Wemo D1 Mini lite.
    *   Magnetically coupled pump: The main circulation device.
    *   Custom PCB: More on this later! 

Ofcourse everything has to fit inside. Here's a picture of the enclosure while it was under construction:

![Enclosure of the brewery controller](https://images.jplattel.nl/file/jplattel-dropshare/2019-11-03-13.15.05-1574201936.jpg)