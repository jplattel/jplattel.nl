---
title: "Lessons learned building Django projects"
date: 2014-03-09
url: https://jplattel.nl/post/2014-03-09-lessons-learned-building-django-projects/
---

I've been using [Django](https://www.djangoproject.com/) as my go-to framework for the past few months. So far I've enjoyed the ride, but have learned some things that I'd like to share with you:

*   During project setup, create a [virtual environment](https://pypi.python.org/pypi/virtualenv) for yourself to work in. Use the '_pip freeze_' for creating a requirements.txt that helps you manage dependencies.
*   Don't use any paths within the views. Instead, use the [reverse function](https://docs.djangoproject.com/en/dev/ref/urlresolvers/#reverse) for looking up routes that correspond to the url. This helps a lot when you run Django in a folder on a server.
*   Logic should be integrated into models. I'm just getting used to this, but helps creating [DRY](https://docs.djangoproject.com/en/dev/misc/design-philosophies/#don-t-repeat-yourself-dry)-er code. In the next version I will be doing this for most of my dashboard functionalities.
*   Use [South](http://south.aeracode.org/) for your database migrations. It helps moving data around when you change your models during development.
*   [Alias](http://ss64.com/bash/alias.html) '_python manage.py_' to '_django_' in your bash or zsh config for easy access to functions.
*   Use different [settings files](https://docs.djangoproject.com/en/dev/ref/django-admin/#django-admin-option---settings) for development, staging and production
*   When deploying, it took me a while to figure out, but it's quite easy to use a virtual environment for your app too. I'm trying to take it one step further by exploring [Docker](https://www.docker.io/).
