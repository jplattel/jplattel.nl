---
title: "Making todos more magical with n8n"
date: 2025-03-19
categories: ["technology"]
tags: ["n0n","openai","todos"]
url: https://jplattel.nl/post/2025-03-19-n8n-automation-ideas-inspiration/
---


I lack a lot of spare time (because of reasons) lately, but sometimes I have a couple of hours to tinker around with any of my projects and one of the things on my list to explore was [n8n](https://n8n.io/). I set it up locally on my NAS and authenticated some services too see what I could connect together.. 

Quite fast a simple idea was formed: could I transform my todolist (in [Todoist](https://www.todoist.com/)) into something magical that I wanted to instead of the slog you would normally feel when doing it. So this would be my first automation I would try and build. Lo and behold:

![n8n flow for magical todos](https://files.jplattel.nl/2025/03/qdO7cY.png)

A simple screenshot doesn't really tell a story, so here it goes:

1.  Every day at 9 am
2.  Get the time as a variable
3.  Get the todo's that need to be done that day (using the variable to query)
4.  Merge the list of objects into a single list of todos.
5.  Ask OpenAI for three options on how to solve the todo (simple prompt below!)
6.  Convert the markdown from OpenAI into HTML
7.  Send out an email to myself with the suggestions of each todo.

Here's the prompt I've been using that's been giving the most interesting magical solutions:

>   You are a magical little helper that helps people get things done. You will take a list of todos and for each todo you will create 3 interesting ways to complete the task. Provide a single line description for each way, listed below each task in markdown format.

As an example, I forgot to check of the todo of this task so it made three suggestions the next morning: (including one that is nice cool: adding a inspirational quote to the email)

![example of a list with 3 options](https://files.jplattel.nl/2025/03/sorGbX.png)

Todoist also offers plugins, but the customizability of this including the prompt is pretty cool. If you have any inspiration for pretty automations in n8n, let me know! Looking forward to explore it some more! (and maybe write about it..)


