---
title: "A wandering.computer update!"
date: 2025-11-10
categories: ["technology"]
tags: ["jlc3d","3d-print","resin"]
url: https://jplattel.nl/post/2025-11-10-wandering-computer-hardware-update/
---


_Most of this post was also published as the first update by email on [wandering.computer](https://wandering.computer). Feel free to [subscribe](https://buttondown.com/wanderingcomputer#subscribe-form) or [read the first post here](https://buttondown.com/wanderingcomputer/archive/wanderingcomputer-update-1/)._

In the past couple of months I've resurrected this project and made quite some headway with a new prototype, which I want to share with you! So without further ado and more walls of text. Here's the current prototype (of which I lost count, so I might change the numbering into a color or verse of my favourite poems).

![](https://files.jplattel.nl/2025/11/zb2wkf.jpg)

I'm aware the right screen has had some persuasion problems resulting in leaking LED light. Re-using previous PCBs for the 4-key keyboard I could get the electronics working in a few days, inglueding (love this amalgamation 😂) an on/off switch. In the mean time I ordered the two sides to be printed by JLC3D, in transparent resin. Yielding a new beautiful prototype (which feels like a finished product!)

![](https://files.jplattel.nl/2025/11/bORpQP.jpg)

It also turns on automatically if you pull the two halves apart. (with a normally open limit switch!).

### Lessons learned

When I was working on a custom PCB for this project I was biting into more than I could chew. The schematic always ended up in a broken state and I couldn't find the energy to route the PCB, let alone deal with the fact that I would have to wait a couple of weeks before JLCPCB delivers the next prototype... (with missing microcontrollers.. héhé). So my biggest lesson was to take it easy on myself, how about using an already available PCB & microcontroller with everything on board? I ended up with the [Waveshare ESP32-S3-LCD-2](https://www.waveshare.com/wiki/ESP32-S3-LCD-2).

![](https://files.jplattel.nl/2025/11/3dbMkV.jpg)

### Software

Once the hardware was sorted out I could point my focus (and AI's) towards the software. I quickly discovered the wonders of bitwise operators to reduce payload size with ESP Now and learned a lot on smaller optimisation to decrease the latency as much as I possibly could.

The current status: A working typing machine, not storing anything yet. But all key lookups and chording works with the wonders of [asetniop](https://asetniop.com/). This leaves me two extra buttons (and accelerometers!) to tinker with. (I also figured out a way to let it behave as a normal keyboard with a simple dongle, as we're broadcasting the ESP Now protocol, others can listen in!)

### Website

The [current website](https://wandering.computer) is also pretty basic (and just a form for this newsletter. I’ll update that soon as well!)

### Note

If you're curious about this project or have wild ideas on what it could do? [Feel free to shoot me an email](/contact)!
