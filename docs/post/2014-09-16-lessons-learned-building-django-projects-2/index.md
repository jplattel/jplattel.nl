---
title: "Lessons learned building Django projects: 2"
date: 2014-09-16
url: https://jplattel.nl/post/2014-09-16-lessons-learned-building-django-projects-2/
---

As of recently I've started my graduation phase of my current study. I've managed to get my own project in for my graduation thesis, which means I'll be spending more time developing with Django. This post is more of a reminder of the things I've learned so far... The previous post can be read [here](http://www.jplattel.nl/lessons-learned-building-django-projects/).

*   The [inspectdb](https://docs.djangoproject.com/en/dev/ref/django-admin/#django-admin-inspectdb) tool is priceless when using other databases in which you have no schema's yet! During the past month I've been tinkering with a database from wordpress, including payment plugins. With the inspectdb tool it's easy to generate a schema so you can continue building managers.
*   Learned the hard way: Managers are the go-to option for model-logic. I've been putting most of my logic in the views.py, but it grows quickly the more complex your application gets. And I've seen myself copy-pasting code a lot, hey, that's no [DRY](https://docs.djangoproject.com/en/dev/misc/design-philosophies/#don-t-repeat-yourself-dry)!
*   I'm exploring [celery](http://celery.readthedocs.org) for a task-queue. It's a new way of thinking for cronjobs and other tasks... Curious if I could integrate it!
*   [Djaneiro](https://github.com/squ1b3r/Djaneiro) saves you a hell of a lot of time, recommended if you use Sublime!
