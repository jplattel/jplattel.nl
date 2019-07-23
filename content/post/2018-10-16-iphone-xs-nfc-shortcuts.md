+++
title = "iPhone XS NFC Shortcuts"
date = 2018-10-16T23:38:39+02:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["shortcuts", "nfc", "iphone", "xs", "lifehacking"]
categories = ["lifehacking"]

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

I've recently gotten a new iPhone and with it some more stuff to tinker with. And one of those things is the ability to read NFC tags natively. Following the rabbit hole I ended up ordering a <a href="https://www.acs.com.hk/en/products/403/acr1255u-j1-secure-bluetooth%C2%AE-nfc-reader/">NFC reader</a>. Albeit a simple one, it turns out it is flexible enought to read most cards and write some as well (and more if you have some time to spend..)

Anyhow, one of the ideas I wanted to work out was the action of turning on an alarm automatically when touching a tag. The way it works is simple, the NFC tags stores a url with custom scheme <code>shortcuts://run-shortcut?name=Wekker"</code>. When the tag is touched, it opens the custom url om my phone triggering a shortcut. This enables the alarm. Presto!

<i>And I've got some ideas for more:</i>   

- Trigger a count in water intake when touching the tag that you can mount to your water bottle.
- Auto navigate to home (if you want you can choose the method of traveling) when touching <a href="http://casiomod.club/">my watch</a>.  
- Set a timer for a amount of time when scannign the tag next to the washing machine.
- Set a reminder for a task, for example buying toilet paper.

The tasks you can automate this way are mostly highly specific and repeatable.
