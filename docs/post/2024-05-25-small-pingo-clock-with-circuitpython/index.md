---
title: "Creating a small Pingo clock"
date: 2024-05-25
categories: ["hardware","technology"]
tags: ["circuitpython","clock"]
url: https://jplattel.nl/post/2024-05-25-small-pingo-clock-with-circuitpython/
---


I've been planning to build a [Pingo clock](https://www.instructables.com/Pingo-Color-Clock-by-Illusionmanager/) for quite some time. Finally having some time available between projects I had most components on hand. With the exception for the bigger LED rings. And I also wanted to have the clock run on Circuitpython instead of Arduino. So I designed a smaller one, with only 7 led rings instead of 9. This also allowed me to print more parts, for example the diffusion screen is printed as well as a custom USB-c charging backplate. I've also switched to a Raspberry Pi Pico W so I can use Circuitpython to automatically grab the time with NTP (just like the original!). 

Here are a couple of photos:

![](https://files.jplattel.nl/2024/07/S2Lj09.png)

![](https://files.jplattel.nl/2024/07/2qFZg0.png)

And the circuitpython code can be found on [Github](https://gist.github.com/jplattel/414ea352eb1125b33bfcbedb7b5d1ff9). I decided to drop a lot of functionality as it's easy to set daylight savings time once a year. And I don't want the overhead of an entire webserver for that. A clock should be a simple device, hah! The clock is now residing on the top of a cabinet in our main room, giving small hints of the current time while not being in your face... In the future I might want to tinker around with the brightness during evening hours... or maybe adjust it with an LDR... Oh soo many ideas, so little time. That's it for now!

