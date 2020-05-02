+++
title = "Making an Ant PCB Maker"
date = 2020-05-02T14:37:05+02:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
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

Strange times we live in these days. Staying at home does allow me to work on projects which have been slowly progressing over time. And one of those is the Ant PCB Maker. A CoreXY based small CNC mill that can make printed circuit boards (PCBs). Contrary to the guide I've decided to built mine a little bigger. This should allow me to create PCBs which are up to 200x200mm without any problems. Here's a photo of the build:
![Work in progress of the Ant PCB Maker build](/img/ant-pcb-maker.jpg)
So far I've been able to get the spindle and CoreXY to work. But there are still some bugs, for example the device hangs when sending multiple g-code commands to quick and the Z-axis is still shorting out.. It is still a work in progress after all. 

In the future I'll hope to add a small engraving laser and a switch so you can choose between laser or milling mode. That would be rather cool I think! I've also update some of the STL files, for example the cable guide and added a tachometer for rpm measurement. Check out the [Ant reddit](https://www.reddit.com/r/TheANT/) for more information or their [bitbucket](https://bitbucket.org/compactpcbmaker/cpcbm) or [youtube account](https://www.youtube.com/channel/UCX44z-SSL7LzcB4xxgUdHHA).