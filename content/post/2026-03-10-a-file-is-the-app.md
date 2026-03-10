---
title: "A file is the app"
date: 2026-03-10T15:11:20+01:00
draft: false

# Tags and categories
tags: ["knowledge", "app", "html", "local", "autonomy", "sovereignty"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["tech"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

[Steph Ango](https://stephango.com/) wrote [file over app](https://stephango.com/file-over-app) in 2023, a cornerstone idea for Obsidian. But with the advent of LLMs, I couldn't help but think what if:
 **the file is the app**? 

While working with the team from the [PIlot Informatie Autonomie](https://digitalefitheid.nl/over/pilot-informatie-autonomie/) I've spoken with people from different fields, expertises and experience.  Turns out, most of the work a knowledge worker does is being done with tools that are complicated, unintuitive, specialized and expensive. Want something else? Good luck convincing your boss, the IT department and the vendor to implement it. 

# A app as a file?
This idea is simple, not a one-size fits all, there are upside & downsides. But I do think we underestimate how much is possible with a single file. The basic idea is this:

> Everything you need for a specific purpose could be contained within a `app.html` file, using your browser as the runtime & interface.

We underestimate how much is possible with simply javascript enabled, IndexedDB and a local file, especially once you start asking an LLM to design certain functionality for you. Want a converter for docx to pdf? Want an OCR something into a spreadsheet repeatedly? Want to manage your markdown files as you can't install Obsidian? This all fits within a single `app.html`. 

Is it really that simple? Yes, shouldn't it be? Here's a list of upsides (and downsides, significantly shorter!)
## Upsides
- It works with (almost) any browser or operating system. 
- No need to install anything ask for permissions or roles to access something, *autonomy*, **sovereignty**!
- It's agnostic where you store it: on your system, a USB drive or in the cloud. 
- It can be interconnected if you want it to be. 
- You are the owner, once you hand it to someone else, that person becomes the owner of their copy. 
- In turn, that makes it your responsibility. *With great power comes great responsibility is what they say!* 
- It can be extremely personalized, extended and designed by the user.
- It will never replace all applications, but it can be a proxy to all your data from different applications...
- You (or an llm!) can audit the file itself to see how the data is being used.
- Want something changed? Learn html,css & js. Or ask a LLM! Don't ever nag your IT department for it!
- If built correctly it might function offline as well!
## Downsides
- It can be extremely personalized, extended and designed by the user. (this is a downside too!) 
- There's no central repository, no management or what ever people want with control...
- It's your responsibility, if it breaks, you yourself need to fix it, this might prove difficult. (try asking an LLM! ) 
- **Again:** you are unlikely to manage anything like this, its a file! (that's an app!)

# Examples
So what does this actually look like? These are all `html` files that you can store somewhere on your computer. Right click and save-as. For you to take, copy and share! 

- [ICS file to meeting notes](https://files.jplattel.nl/2026/03/474xay.html), drag in your ICS file (and configure a template the first time) and output a markdown/docx file with your meeting note template (including prefilled attendees with their email)
- [Browse, edit and search through directories with markdown files](https://files.jplattel.nl/2026/03/X0dnV6.html). (including a docx convert)
- The following weeks I'll add more examples here, but if you have any, [feel free to let me know](https://jplattel.nl/contact)!

# Future
To me this really is a simple idea, testing it with different persons right now hasn't really shown reasons why people shouldn't do more like this! If you want the autonomy and sovereignty, you do need the responsibility! 

From a more technical perspective, getting a js frontend to compile to a single file that's embedded within a html file is relatively easy, be sure to include dependencies instead of importing them on runtime to allow for offline functionality. If you think it's missing an API, why not try get requests to pass data into the file? The request parameters are the interface. Don't mess around with a backend, we're not building a stack here, we're building a **file**.