---
layout: post
title: "Creating smart bubble counter fermentation process tracking"
date: 2018-01-07
type: post
published: true
status: publish
author:
  login: Joost Plattel
  email: jsplattel@gmail.com
  display_name: Joost Plattel
  first_name: Joost
  last_name: Plattel
---
This weekend I spend my time on electronics, with a specific goal in mind, automating the tracking of a fermentation vessel that I use for brewing. My starting point was a Wemos D1 mini lite, which is a cheap arduino compatible chip with wifi options.

I wanted to track how many bubbles we're sent past the airlock and also needed a photo interupter gate. So in the end everything is pretty cheap and I only needed some more LEDs, an enclosure, spare wires and some free time!

My first version was build directly on a prototype board of the Wemo, but after selecting the enclosure I decided not to use any headers too keep a lower profile. Here's what my testing setup looked like:

![Testing setup for figuring out if the sensor worked correctly and fluid types selection](/img/test2.jpg)

While testing I could try different fluids, and the more opaque ones are better. So coffee seems like a perfect option. When everything worked correctly I mapped all ports on the enclosure, drilled or cut them out and soldered everything to the Wemo. The LEDs were mount on the enclosure with trough-mounts. Here's a video of the latest test setup.

And a picture of the device after everything is put together! Now I only need to make a web interface.

![Final product that enables me to track bubbles in a fermentation process](/img/end3.JPG)

As for the code, it's simply a counter that tracks how many bubbles go past the airlock. And every 10 minutes it pings to a server with the count. I've uploaded the [Arduino code to Github](https://gist.github.com/jplattel/1a7e76f1fedf7caa43753fcde04b6a24) and embedded it below: