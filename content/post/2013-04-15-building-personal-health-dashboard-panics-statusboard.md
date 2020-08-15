---
title: Building a Personal Health Dashboard with Panic's Statusboard
date: 2013-04-15 22:43:23.000000000 +02:00
---
When Panic released their [Statusboard app](http://panic.com/statusboard/) and I discovered it was possible to use JSON and html to embed it into pages, my mind raced with ideas about what to build. Both the Zeo and Fitbit API offer JSON output thus could be embeddable. To give a quick overview what it looks like with dummy data embedded, have a look at the following image:

![Personal Health Dashboard](/img/photo.PNG)

The next step is to implement a simple server side script that shapes and caches the JSON data in the correct format. We'll make that a weekend project. And you're not limited to Fitbit or Zeo data any more, any API or maybe even trough [StatHat](https://www.stathat.com/) could offer a way for making it visual for the personal health dashboard :)