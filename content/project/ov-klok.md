---
title: "OV Klok"
date: 2024-02-14T17:09:44+01:00
draft: false
year: 2024
tags: ["esp32", "circuitpython", "ov", "public transport"] # Example: `tags: ["machine-learning", "deep-learning"]`
summary: "A small hardware project that uses and ESP32 and pressure-forming plastic" # Used on the project card
image_preview: "ovklok.jpeg" # Used as thumbnail
external_link: "https://ovklok.nl" # Unused at the moment...
---

The [OV Klok](https://ovklok.nl) is a small hardware project that show the time left before the next departure of public transport you use. It's made with and ESP32 module and 7 segment digit display. 

![](/img/ovklok.jpeg)

You can [order one](https://shop.ovklok.nl/) if you live in the Netherlands and use public transport a lot from a specific location. The enclosure is made by pressure-forming plastic in the [Mayku Multiplier](https://mayku.me/multiplier) and a 3D print allowing for different methods of mounting and freestanding use.

The ESP32 runs on Circuit Python and is fully configurable with a USB-C cable through the browser with the use of WebSerial. This skips troublesome setups like captive portals or file editing. It's a simple and calm device allowing you to catch your public transport right on time!