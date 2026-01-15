---
title: "Getting started with a LoRaWan gateway"
date: 2017-06-03
url: https://jplattel.nl/post/2017-06-03-getting-started-with-a-lorawan-gateway/
---

Most of the work I do is software related, but sometimes I do dabble in hardware. As a result I receive more and more requests for hardware related projects. As an aspiring maker I do want to explore this side of technology more so these projects are perfect opportunities for me to learn.

And while learning I thought it would be nice to share what I learned so far as well! I've been building a LoRaWan gateway with at least 10 connected nodes. And in the past few weeks I got the gateway working, and I'd like to show which steps I took and what hardware is required.

###### Bill of materials

*   [Raspberry Pi 3 (with micro-sd)](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)
*   [IC880A LoRaWan concentrator](https://wireless-solutions.de/products/radiomodules/ic880a.html)
*   [ch2i shield](https://github.com/ch2i/iC880A-Raspberry-PI) for the IC880A
*   A soldering iron, solder and some headers.
*   Spacers and other misc items (such as an enclosure of some sort)

###### Software

*   An account with [The Things Network](thethingsnetwork.org)
*   [Sign up with Resin](https://resin.io/) for remote deployments and management (you also need to download the Resin boot image)
*   A little experience with Git

###### Hardware preparations

1.  Solder the right headers (2 rows) to the ch2i shield so you can mount it on the Raspberry Pi 3
2.  Check the spacing and mount the spacers in between the two boards
3.  Disconnect the shield if it fits and then solder the headers for the concentrator on the ch2i shield, and any optional elements (like LEDs)
4.  Solder a bridging header onthe ch2i shield that enables you to share power between the Pi and the concentrator (this took me a while to figure out...)
5.  Re-mount the ch2i on the Raspberry Pi and then add the concentrator
6.  Plug in the power the LED on the concentrator should light up!

###### Software setup

1.  Download the resin-boot image with the right configurations (I used ethernet only, but if you want wifi, be sure to add it or check the docs)
2.  Flash the micro-sd with the Resin image ([I can recommend Etcher](https://etcher.io/))
3.  If you setup with Ethernet, be sure to plug in the cable!
4.  Plug in the power for the Raspberry Pi and it should pop up in the Resin Dashboard as online and you can check the logs
5.  Create a new local git repo by cloning this repository by [JPMeijers](https://github.com/jpmeijers/ttn-resin-gateway-rpi)
6.  Add, commit and push to resin, as specified in README of the repository.
7.  Go the [The Things Network console](https://console.thethingsnetwork.org), create a gateway and keep a copy of the Gateway Key and ID for the next step
8.  In the resin dashboard, set the right env-vars and _set the reset pin to 11_
9.  After the initial push and configuration the Raspberry Pi should automatically join the Things Network!

If everything went as planned you should be up and running with a working gateway that can be configured to other apps on The Things Network.

![](/img/lora-ttn.png)

In a next post I think I'll share the process of developing the motes. Something with GPS, movement and other things that might be interesting to measure.
