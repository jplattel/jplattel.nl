---
title: "Recreating a Photostream With Immich and Python"
date: 2025-04-18T10:13:58+02:00
draft: false

# Tags and categories
tags: ["python", "immich", "photos", "synology", "photostream"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["pkm", "technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

Two posts within a week? That's pretty much magical... I'll need to have a look on why this happened 👀. Talking about looking at things, one of the functions that Apple used to offer was a Photostream, which worked through iCloud and allowed you to view your photos from your mobile phone on your Mac. This felt seamless to me and allowed me to take a picture and handle it on my Mac. Apple discontinued it and now I'm stuck with images that are synced to my NAS (thanks [Synology Photos](https://www.synology.com/nl-nl/dsm/feature/photos)!).

Synology Photos has it's own problems but their syncing solution works quite good! And while I don't necessarily need a speedy solution for a Photostream, having something to tinker with isn't something that Synology Photos offers. Enter [Immich](https://immich.app/), the best photo archive I've come across so far (thanks for the [PKM Summit](https://pkmsummit.com/) for pushing me to have a look around!)

The way I set Immich up is that it works with the same directory as Synology Photos so syncing with one shows the photos in the other! 

Immich offers an API and with a little setup I'm now syncing last months photos to a directory again! It isn't the quickest, but having a tailored made solution is interesting, as well as having an API for other stuff gave me some additional ideas:

1.  Automatically gather photos from a person in a folder of my liking
2.  Filter out screenshots I take on my phone to a specific directory for reference (or [eagle.cool](https://github.com/jplattel/photostream) even!)
3.  Somehow automatically gather my 8:36pm photos based on metadata? (or at least make a selection)

Anyhow, [the code for the Photostream is up on Github](https://github.com/jplattel/photostream)!