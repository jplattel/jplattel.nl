---
title: "Automating my brewery (Part 2)"
date: 2019-11-21
tags: ["beer","automating","projects","DIY","brewer","brewing"]
url: https://jplattel.nl/post/2019-11-18-automating-my-brewery-part-2/
---


In the [first part](https://jplattel.nl/post/2019-11-17-automating-my-brewery-part-1/), I looked at the frame/enclosure for everything that we need to automate my own brewery. In this part I wanted to show which parts are on the inside based functionality. but first a picture of the enclosure while it's being build:

![Enclosure of the brewery controller](https://images.jplattel.nl/file/jplattel-dropshare/2019-11-03-13.15.05-1574201936.jpg)

The enclosure contains the following things:

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

Most electric wiring is done with couplers, and only the lower voltages for the button and controllers are based on pins or screwterminals, which are less secure, but hey! In the next version I might want to make the shield for the wemo plug into the one for the display, saving another 4 wires.. But that's for another time.

The next post I will talk about hooking all the things up together and a bit more about the electronics, for which I designed my own printed circuit bord (_PCB_). One of the upgrades on the line would be arcade sounds ofcourse, who wouldn't like a brewery with a synth voice!
