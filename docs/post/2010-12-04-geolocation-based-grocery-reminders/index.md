---
title: "Geolocation based grocery reminders"
date: 2010-12-04
url: https://jplattel.nl/post/2010-12-04-geolocation-based-grocery-reminders/
---

I really don't like shopping for groceries and I developed the habit to forget half of my groceries.... A digital grocery list would be perfect.... shortly after discussing todo-lists with [Martijn Aslander](http://www.twitter.com/resourcerer) I was inspired to build a mashup to solve my problem.

![](/img/Image.png "Image")

Based on [information gathered](http://www.jplattel.nl/geotracking-streaming-gps-locations/) by [Instamapper](http://instamapper.com/) in combination with the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) it is possible to calcuate the distance between two points on a sphere. When the distance is small enough a push notification including a link to my digital grocery list is send to my iPhone [trough the Notifo API](https://api.notifo.com/). My knowledge of python and App Engine is slowly growing and these kind of mashups are great exercises!

The mashup includes an admin area where grocery stores and other locations can be added and edited. This way it is easy to modify the notifications. I also added the option to specify the radius so you can configure distance at which a push notification would be send.

All location-based mashups gathering information from Instamapper together will be named [Mappedlife](http://mappedlife.appspot.com/). I will be sharing my source-code when I have some time to figure out Git.
