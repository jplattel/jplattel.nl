---
title: "Automating my brewery (Part 1)"
date: 2019-11-17
tags: ["beer","automating","projects","DIY","makerbeam"]
url: https://jplattel.nl/post/2019-11-17-automating-my-brewery-part-1/
---


As an avid home-brewer I own a setup that I use for testing out recipes and recreating my favorite beers with my own twist. Over the last years, my gear has improved a bit and one of my main projects is automating my own brewery. I wanted to document this, so maybe other people could use this as well.

My brewing system consists of a Brew in a Bag ([BIAB](https://biabbrewing.com/)) system, build on a modified [Weck](https://www.weckenonline.com/inmaakketels-en-toebehoren)-kettle. I'm able to brew a batch of around 20L depending on how well filtration and mashing goes. I've been driving the mashing schedule based on a temperature meter just in the middle of the kettle and eye-balling it on how well it keeps the temperature. (_insulation helps keeping it more stable of longer periods time!_)

After a few years with this setup I made some improvements, with bigger valves and the idea started to create a controller based on a microcontroller that could work well with a [PID](https://www.wikiwand.com/en/PID_controller) algorithm to keep it even more stable (_or even automatically progress through your schedule!_).

Ofcourse this controller needed a box where it could fit in and I wanted some other things as well, for example digital temperature sensors, a pump for circulating the mash and maybe even more... So I needed an enclosure for all the things. My [brother](https://ikbenke.es/) has been tinkering for a while with [Makerbeam](https://www.makerbeam.com/). And with a few sketches I had an idea on what I wanted to build.

My enclosure consists of mainly Makerbeams, which make a 30 by 30 cm square as the bottom and top plate. They are connected trough vertical beams of 15cm. The sides are made with black HDPE that is cut manually & with a laser cutter. The top plate is made out of waterjet cut aluminium, to have a solid base on which my kettle can stand. Here's a quick mockup in Fusion:

![Mockup for the controller enclosure](https://images.jplattel.nl/file/jplattel-dropshare/Screen-Shot-2019-11-17-22-36-41.80-1574026605.png)

After I ordered most of my materials from [Makerbeam](https://www.makerbeam.com/) I set out to build it. I also designed and [laser-cut](https://snijlab.nl/nl) some panels with support for LCD-displays, buttons (more on that later!). And I manually drilled holes in the back-panel for in and output voltage.

In part 2 I will show the final build of the enclosure itself and in part 3 I hope to dive into the electronics and the wiring! 
