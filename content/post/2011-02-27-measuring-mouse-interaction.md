---
title: Measuring mouse interaction
date: 2011-02-27 22:12:40.000000000 +01:00
tags:
- MacLogger
- Processing
- python
- Quantifed Self
---
I am an avid user of shortcuts and like to improve my workflow and I would like to discover hidden patterns. This is what happens next. When I bought my Mac 2 months ago I dumped my mouse in favor of the trackpad. Did this influence my mouse/trackpad interaction? Sadly I can't draw any conclusions about it because I switched my operating system too!

However more recently I started using MacLogger and together with [Jelle](http://gedachtes.van.jelleakkerman.nl/) I've made some custom python and processing scripts that should offer more insight into my mouse usage. When I showed the screenshot below to Jelle he noticed I don't use my dock, as there are almost no points of rest at the side or bottom.

![mouse patterns in processing](/img/background7-1024x640.png)

I can confirm this because I use [Alfred](http://www.alfredapp.com/) to launch everything. Another interesting point is the usage of the Omnibox which is related to my Google Chrome usage. I didn't know the shortcut 'cmd + L' to select the omnibox yet. Let's see if I run the test again in a month if this has improved. An afternoon also yields the following data:

*   68805 total mouse movements.
*   45831 movements shorter as 10px.
*   22942 movements longer as 10px and shorter as 200px.
*   31 movements longer as 200px.
*   791346px total distance (somewhere around 10px/second/day).

I use the trackpad/mouse for mostly smaller movements. Is it possible to let is auto-snap to certain things?

I am aware there is software which makes nice graphics etc, but I like my data raw and [MacLogger happily provides it](https://github.com/andrewschaaf/MacLogger)!