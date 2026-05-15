---
title: "Logging like 'Pi' – card"
date: 2026-05-15T09:00:00+02:00
draft: false
---

"Captain's Log, Stardate 41153.7"

There's something iconic about the way Captain Jean-Luc Picard begins his entries in *Star Trek*. Leaning back in his ready room, hands clasped, he calmly documents the ship's journey, decisions made, challenges faced, and lessons learned.

![Make it so!](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjVuYmx5cmdmeTJ5ZDB2MWt5bWl0cnJqNXJjZWRldmNkcDRsNWd0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bKnEnd65zqxfq/giphy.gif)

As developer, I constantly make decisions, either with or without the help of llms:

- Why did I choose this solution?
- What was the goal I wanted to achieve?
- What alternatives did I consider?
- What bugs did I encounter and how were they resolved?
- Which decision did I make?

Without documentation, this context disappears. Six months later, you're staring at code wondering, *"What was I (and my LLM) thinking?"* 🤭

## Enter pi.dev and the Captain's Log Extension

I've been a fan of [pi.dev](https://pi.dev) and inspired by Picard's meticulous record-keeping, Pi itself built a pi.dev extension called **pi-captains-log** that brings this Star Trek tradition into your development workflow.

### What It Does

The [pi-captains-log](https://github.com/jplattel/pi-captains-log) extension allows you to:

- **Record decisions** as you work, with automatic timestamps
- **Document context** for future reference
- **Search past entries** by keyword or date range
- **Maintain continuity** across development sessions

### How It Works

The extension integrates seamlessly into your pi.dev workflow, making it effortless to capture thoughts and decisions as they happen—no context switching required. A `write_captains_log` and `read_captains_log` is all you need. If you're using pi.dev and want to bring a bit of Starfleet discipline to your development workflow:

1. Check out the extension: [github.com/jplattel/pi-captains-log](https://github.com/jplattel/pi-captains-log)
2. Install it following the README instructions
3. Start keeping your own captain's log

---

**Live long and prosper, and may your logs be ever detailed.** 🖖
