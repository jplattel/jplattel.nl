---
title: "Automating my brewery (Part 3)"
date: 2019-12-19
url: https://jplattel.nl/post/2019-12-19-automating-my-brewery-part-3/
---


In this part of building my own automated brewery I want to focus on something I have never done before. And that this: ![](https://images.jplattel.nl/file/jplattel-dropshare/Screen-Shot-2019-12-26-17-02-30.64-1577376160.png)

Designing my own PCB (printed circuit board) is something I was fascinated in for some time, but I always thought of it as somthing very complex and hard to learn. Luckily I got introducted to EasyEDA by [my brother](https://ikbenke.es/) and spend a few afternoons watching video tutorials. After rummaging around a bit and some frustration I ordered my first board.. As always, this one only worked partly, temperature input & lcd worked fine, but the buttons lacked a pull up resistor on some pins and I used one pin that didn't have interupt support on the WeMo. 

So version 1.1.0 was ordered only a few days after I received the first one... With newly added resistor and a new pin mapping. I choose a [WeMo](https://wiki.wemos.cc/products:d1:d1_mini_lite) as a base logic board because I was interested in [MicroPython](http://micropython.org/) as well. With a few utilities like [ampy](https://github.com/scientifichackers/ampy) and picocom I was up and running and could tinker around with the code...

So the only thing left is programming in the buttons, creating a PID algorithm (or use a preexisting one?), design a LCD interface and hook up the last electronics like the solid state relay. In the final post I will have some pictures of the brewery working and all the resources required to build your own!
