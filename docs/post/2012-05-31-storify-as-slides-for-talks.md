---
title: "Storify as slides for talks"
date: 2012-05-31
url: https://jplattel.nl/post/2012-05-31-storify-as-slides-for-talks/
---

I like [Storify](http://storify.com), a service that lets you curate your own story based from sources like Twitter, Facebook or other social networks. And sometimes I wonder what would happen if you let people curate it live on a beamer during festivals or want to use it for public talks... Then the website isn't that handy or slide-enabled.

But it shouldn't be that hard to extract all data from Storify and glue everything together into a slide-ready format right? With that idea in mind, I whipped up a quick little Bottle.py app on OpenShift provided by RedHat. Within 3 hours I connected the timeline from [Verite](http://timeline.verite.co) to Storify and [Storify to Timeline](http://timeline-joost.rhcloud.com/) was born:

[![](/img/Storify-to-Timeline.png "Storify to Timeline")](http://timeline-joost.rhcloud.com/)

Be aware, there are still some bugs that need to be ironed out, however as it's just a quick hack, I'm not sure if I'm finishing it. If you are a developer from Verite or Storify, let me know and I'll provide you with the full source-code of my work! And if you've found a bug let me know in the comments!

_Known bugs and ideas_ (input driven development, no humans were harmed during testing):

*   Wrong title on timeline view (easy fix)
*   Timeline sorts on day, not specific time
*   Use bit.ly to shorten share url
