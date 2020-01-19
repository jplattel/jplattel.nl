+++
title = "My setup for Python projects"
date = 2020-01-19T20:07:24+01:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
# Use `caption` to display an image caption.
#   Markdown linking is allowed, e.g. `caption = "[Image credit](http://example.org)"`.
# Set `preview` to `false` to disable the thumbnail in listings.
[header]
image = ""
caption = ""
preview = true

+++

Inspired by a [few](https://medium.com/@markdlavin/my-python-environment-setup-fcddd0e99e5b) [blogs](https://jacobian.org/2019/nov/11/python-environment-2020/) that I follow I wanted to share my current setup for Python projects that I use personally. This setup might vary based on [clients](https://jplattel.nl/client/) that I have, but for my own projects this is what I mostly use:

* iTerm, `zsh` & `oh-my-zsh` with [my own coloured theme.](https://gist.github.com/jplattel/34f14bb95854c84a547d7049142270b0) 
* VSCode, with the following plugins:
    * Python for VSCode
    * autopep8
    * Bracket pair colorizer 2
    * Indent rainbow
    * Git Lens
* Virtualenv (with [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/))
    * All environments are saved in the `~/.environments` folder,
* `black` & `isort` for code-formatting and sorting imports
* Pytest for tests, with coverage (`pytest-cov`)

Sometimes my projects are inside a Docker container and don't need the virtual environment, a specific dockerfile for that Python version is sufficient enough. 

As for looking more into the future, I want to look into [Poetry](https://python-poetry.org/) for managing environments and dependencies. And based on my experience with more typed languages I wanted to integrate [mypy](http://mypy-lang.org/) into my environment as well. 


