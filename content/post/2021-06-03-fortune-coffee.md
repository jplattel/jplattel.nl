---
title: "A fortune coffee grinder"
date: 2021-06-03T13:29:25+02:00
draft: true

# Tags and categories
tags: ["making", "technology", "coffee"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: [] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

I've [written before about the old coffee grinder](https://jplattel.nl/post/2019-10-21-the-idea-machine/) I repurposted as a random idea machine. This post show a bit more in depth on how it works and what I changed to convert it to battery power instead of having a wired connection.

First of, I wanted the parts on the inside to be structured better. A solid mount for all the switches, the Pi Zero and of course the battery with all the charging and boost converting boards we need. Here's what I designed:

![A small printed mezzanine for holding all the electronics](https://images.jplattel.nl/2021/06/005eaa6bae4d1a8157f2191834e38c2c.png)

It fits between the lid below the grinder, allowing you mount it with the same 4 screws as the top. The wiring is done in such a way the enclosure can be popped off to replace the paper in the printer. It also mounts the trigger switch, instead mounting this to the grinder body itself. The switch to turn everything on/off is also hidden in the enclosure and only available through the drawer.

To convert it to battery, I need to solve two things: for charging a simple TP4065 would do the job to charge a 18650 Li-ion battery. Since the thermal printer requires 5 - 9 volts I need the boost converter to output that voltage. 