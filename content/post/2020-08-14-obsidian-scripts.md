+++
title="My daily journaling scripts for Obsidian"
date=2020-08-15T09:37:33+02:00
draft=false
+++

Since I'm quite a heavy user of Obsidian I'd like to share some of my scripts I've written for it. Please note that all of the scripts make use of [Keyboard Meastro](https://www.keyboardmaestro.com/main/) as a way to activate them and some of them use javascript automation within Mac OS X. So it's Apple only for now.

Within Obsidian I'm keeping a folder in which there are files that are used as a templates. Whether that is the *daily note* or some other template I often use. Keyboad Meastro just reads these files and paste the contents right at the cursor when I type a certain string. 

This speeds up the creation of specific notes for locations/persons or other formats that I often use. For example, this is my current format for my daily note at this moment:

```markdown
# (hyper + t)
## 👥 Persons 

## 💡Ideas / Thoughts / Notes

## 📅 Calendar
(type .cal)

## ⌛️ Timing
(type .timing)

## ✅ Tasks
(type .tasks)

```

This template consists of hints for other shortcuts that Keyboard Meastro runs and returns with data. The `hyper + t` shortcut pastes the current date. (The hyper key is a re-mapped caps-lock to F19). The Calender, Timing & Tasks shortcuts all run some jsx automation scripts that fetch data from my Calendar, Timing App or Omnifocus and paste it into the daily file. 

I've created a [Github repository]() with my Obsidian automations, feel free to clone or fork it with your own! 