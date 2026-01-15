---
title: "Tinkering with the Meetup API"
date: 2014-07-02
url: https://jplattel.nl/post/2014-07-02-meetup-api-tinkering/
---

[Meetup.com](http://meetup.com/) is a service that I use and have been using to organize events for networks. Even though I like Meetup as a service, there are some thing you just cannot do. For example it's kind of hard to make use of the internal knowledge or connections that people have within the network itself. And you are limited to Meetup for sending messages to everyone.

About a week ago I sat down to explore [their API](http://www.meetup.com/meetup_api/), to see if you could somehow build upon their service. Turns out, you can! I've written a custom wrapper for the Meetup API, and within a few days my prototype was up and running. For the [Permanent Beta Meetup](http://meetup.com/PermanentBeta/) we organized I've build a dashboard which would let people explore the community and it's interest. You could type in anything you would like to explore and what kind of interests you share with other people from the Meetup. Here's a screenshot what it looks like:

![Screen Shot 2014-07-02 at 11.17.07 AM](/img/Screen-Shot-2014-07-02-at-11.17.07-AM-1024x657.png)

The dashboard worked locally for the event, but I'm planning on releasing it as open-source software. Current goals are: specific admin tools, letting people use the software with their Meetup account and connecting it to other services. For now I've open-sourced [my little Meetup API wrapper](https://github.com/jplattel/PyMeetup).
