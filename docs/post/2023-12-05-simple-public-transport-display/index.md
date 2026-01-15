---
title: "A simple public transport display / clock"
date: 2023-12-05
url: https://jplattel.nl/post/2023-12-05-simple-public-transport-display/
---


My office is located in a different city, so I have to commute both ways.. Always taking the same initial transport from either my office or my home.. On both sides I'd love to have a simple display that shows the most recent leaving transport. 

After some tinkering I've cobbled together a piece of hardware (with just 10 solder joints!) and a simple API/crawler that kindly scrapes the latest public transport (with kindly I mean at most once an hour). For the sake of simplicity I chose a crawler above an API as I didn't want to spend too much time on it. Within a couple of minutes I had numbers show up on the display:

![](https://files.jplattel.nl/2023/12/tRwSLt.jpg)

Based on Chalice I've writte a small python script that will crawl the specific public transport website in a lambda function and show a response like this:

![A simple API response from my crawler](https://files.jplattel.nl/2023/12/k1oIyV.png)

The hardware is just a simple ESP32 with a series of 7 digit displays. I run Circuitpython on the ESP for the ease of development and with a simple request to my own API it's quite easy to show how much time is left before the next time my transport leaves. Including the travel time in minutes from my office to the location where the tram leaves I've now got a specific clock on my desk! I might turn this into a product in the future! 

