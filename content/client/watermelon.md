+++
title = "Watermelon"
date = 2018-05-30T23:28:49+02:00
draft = false

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["docker", "docker-compose", "python", "django", "drf"]

# Optional image to display on homepage.
image_preview = "watermelon-logo.png"

# Optional external URL for project (replaces project detail page).
external_link = "https://watermelon.co/"

# Does the project detail page use math formatting?
math = false

# Does the project detail page use source code highlighting?
highlight = false

+++

In two weeks I created the first REST API for a chatbot service that Watermelon is offering to their clients. 

Once I got started I also converted their current stack to support Docker & implemented an auth gateway that would take in older auth flows and support better authentication for the API. The API was build in _python_ & _Django_ with Django Rest Framework (DRF)