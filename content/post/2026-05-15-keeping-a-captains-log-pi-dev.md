---
title: "Logging like 'Pi' – card"
date: 2026-05-15T09:00:00+02:00
draft: false
---

"Captain's Log, Stardate 41153.7"

There's something iconic about the way Captain Jean-Luc Picard begins his entries in *Star Trek*. I fondly remember it. As a developer, I constantly make decisions, either with or without the help of llms:

- Why did I choose this solution?
- What was the goal I wanted to achieve?
- What alternatives did I consider?
- What bugs did I encounter and how were they resolved?
- Which decision did I make?

However, six months later, you're staring at code wondering, *"What was I (and my LLM) thinking?"* 🤭

I've been a fan of [pi.dev](https://pi.dev) and inspired by Picard's meticulous record-keeping, Pi itself built a pi.dev extension called **pi-captains-log** that brings this Star Trek tradition into your development workflow.

## What It Does

The [pi-captains-log](https://github.com/jplattel/pi-captains-log) extension allows you to:

- **Record decisions** as you work, with automatic timestamps
- **Integrate with ask_user** for user inputs
- **Maintain continuity** across development sessions
- **Search past entries** by keyword or date range

## How It Works

The extension integrates seamlessly into your workflow. A `write_captains_log` and `read_captains_log` is all you need. If you're using [pi.dev](https://pi.dev) and want to bring a bit of Starfleet discipline to your development workflow:

1. Check out the extension: [github.com/jplattel/pi-captains-log](https://github.com/jplattel/pi-captains-log)
2. Install it following the README instructions
3. It'll start keeping your own captain's log in `.captains-log`

---

**Live long and prosper, and may your logs be ever detailed.** 🖖

_PS: Not sure if I'll publish this one on NPM, but feel free to do so if you have any improvements!_