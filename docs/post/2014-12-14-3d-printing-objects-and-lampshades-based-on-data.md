---
title: "3D printing lampshades or any object based on data."
date: 2014-12-14
url: https://jplattel.nl/post/2014-12-14-3d-printing-objects-and-lampshades-based-on-data/
---

Last week I stayed at [Herman's](http://herman.kopinga.nl/) place for a couple of days. While there we primarily discussed buttons, 3D printers and other nerdy stuff. As it happend I'd look over on his desk and found some test prints for lampshades made of ABS. That got me thinking.. Just a few hours later I was knees deep in code trying to generate something that would look like a 3D model: 

![A 3D model in Openscad](/img/Screen-Shot-2014-12-12-at-11.56.18-AM-1024x655.png)

I'm generating a model with a library called [Tangible](http://tangible.readthedocs.org/). The development of the library seem to have stalled, especially at the most crucial point. Creating a rhombus tower with more than 2 dimensions.. So I spend (long) evening and a day trying to [grok](http://en.wikipedia.org/wiki/Grok) 3D modeling with code. I've implemented the function for generating such a tower within the library itself and I might open-source the code shortly!  After tinkering a while this is where I am now: 

![Lampshade - Random](/img/Screen-Shot-2014-12-14-at-10.55.44-PM.png)

Imagine the possibilities, of printing objects, like lampshades or anything else really that represent a data-set? I for once would love to have a series of lamps that tell the story of Whatsapp messages with friends. Or maybe a company that shows the stock price as a big 3D-printed of laser-cut ornament at the reception.
