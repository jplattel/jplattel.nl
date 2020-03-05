+++
title = "Designing a custom Raspberry Pi camera mount for the Prusa Mini"
date = 2020-03-05T15:33:19+01:00
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

Since a month I own a small 3D printer: [the Prusa Mini](https://www.prusa3d.com/original-prusa-mini/). I've printed almost half my current spool of filament and I can say I love the way the Prusa Mini works for me. Once of the upgrades I have done is move towards [Octoprint](https://octoprint.org/) for my workflow, this allows me to connect everything together from my own computer. Here's how it works:

1.  I design a component or body with __Fusion 360__, and in the 'Make' menu option I choose to pass the file to the Prusa Slicer application
2.  In __Prusa Slicer__ I configure any supports required or tweak any print settings. I then slice the code and send it towards Octoprint.
3.  __Octoprint__ shows the file and let's me print directly the gcode file directly. Without moving any USB disk around I can start my print, straight from design to reality.

Octoprint does offer more functionality and one of them is the ability to [add a camera to not only create timelapses, but also monitor the print itself](https://docs.octoprint.org/en/master/). For other printers there are more than enough mounts for cameras. But one for the Prusa Mini was missing. This was an opportunity for me to design one:

![Prusa Mini Camera Mount design](/img/prusa-mini-camera-mount.png)

With the workflow above it took about half a day to go from design to a physical object that is now on my Prusa Mini:

![Prusa Mini Camera Mount printed](/img/camera-photo-raspberry-pi-prusa-mini.jpg)

I've added the __[Prusa Mini camera mount](https://www.thingiverse.com/thing:4203064)__ on my Thingiverse account so other people can also use this! It's awesome to think about something, design it, print it and see it working! In the future I hope to share more 3D printed things that might be useful!