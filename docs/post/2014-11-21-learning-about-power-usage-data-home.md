---
title: "Learning about power-usage data from my home"
date: 2014-11-21
url: https://jplattel.nl/post/2014-11-21-learning-about-power-usage-data-home/
---

I recently moved to a new home, and I got a freshly installed new electricity meter that's a little bit more intelligent. It was now possible for me to sign up for [slimmemeterportal.nl](http://slimmemeterportal.nl), that let's you access the power-usage data from the meter by a 15 minute window. That's quite some data to play with!

Being interested in the data, I wrote a little scraper that collects it for me and stores it in a SQL database, from there on, with Flask and Peewee it was quite simple to create a little API for my own dataset. Currently I'm playing with [react.js](http://facebook.github.io/react/) and [angular.js](https://angularjs.org/) to learn them both a bit and explore what it possible. Here's one of the first graphs:  
[![Power Usage of my own home over the past 9 days](/img/power-usage-graph-1024x262.png)](http://www.jplattel.nl/img/power-usage-graph.png)I've put [the scraper-code on Github](https://github.com/jplattel/smp-scraper) for everyone to use! I suggest if you want to liberate your data, that's the way to go!

What I want to do? We'll there are several things:

*   Crossfilter the data to pick up any interesting data points.
*   Explore machine learning if I can predict my power-usage more
*   Find correlations based on temperature, activities or weather
*   What are those mystery peaks during the night?

