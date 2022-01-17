---
title: "Custom earbuds and hearing protection with photogrammetry"
date: 2021-12-28T21:17:40+01:00
draft: true

# Tags and categories
tags: [] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: [] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

For my [client](https://jplattel.nl/client/) [Jawsaver](client/jawsaver) I was asked to develop an electronic prototype. One of the things I'd love to do when starting out such a development project is to get a sense of how much space I have to work with. And I discover a novel way for me to develop custom earbuds! 

## Intro

I'd like to show you the steps and walk you through how I did it! Here's the things you'll need:

1.  Regular (polymer) clay
2.  A smartphone for taking pictures
3.  [Photocatch](https://www.photocatch.app/) installed on your computer
4.  [Meshmixer](https://www.meshmixer.com/) installed as well
5.  Parametric CAD/CAM software (I like [Fusion360](https://www.autodesk.com/products/fusion-360/personal) by Autodesk), but [Freecad](https://www.freecadweb.org/) might do the job just fine!
6.  A resin SLA printer (I own a [AnyCubic Photon S]())
7.  Flexible resin
8.  Optional: earbuds that allow custom buds, (if you just want hearing protection you can skip this!)

## Create a mold

Warm up the clay, create a ball roughly 3cm in diameter. Create a cone from the ball and press it into your ear while turning it a bit so you follow the ear canal. Then slowly pull it out while turn it the other way around, allowing the clay to keep it's shape as much as possible. 

## Photogrammetry

Using an A4 sized paper as background, put the mold in the center, and make photo's while keep turning the paper. Try as many different angles as possible, the more photo's the better. Aim for at least 50, but around 75 should be enough. Don't forget to turn the mold around as well! Here's a photo of the turd, I cannot recommend the color brown:

![](https://files.jplattel.nl/2021/12/0c92fbd4924e1fd1285119110ae9b179.png)

Load the photos onto your computer and start Photocatch! Select the photo's you've just made and select a high quality model. Leave Photocatch to work for a little bit, grab a cup of coffee or tea and enjoy the model once it's finished! Export to `.OBJ` format. 

## Postprocessing

Most of the post processing is done in Meshmixer, since Fusion360 can't really deal with a high poly models in it's parameteric form. One of the first things I do in Meshmixer is a place cut to reduce the total sice of the earbuds, in my experience you don't need the entire auricle. (in my case I also needed to scale it 100x to get the proper size!) Try hollowing out the model with Meshmixer, keeping a wall-size of around 0.8mm.

In Fusion I also removed a wall by boolean operation of a circle on the backside, this should allow me to print without any holes. In the end the model looks like this: 

![](https://files.jplattel.nl/2021/12/bdd84015e7b20163aef3503428549056.png)

## Printing the mold

