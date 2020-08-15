---
title: "Predicting energy usage with Prophet"
date: 2017-03-16
---

Facebook recently released [Prophet](https://github.com/facebookincubator/prophet/), a library that makes it easy to create predictions based on time-series data. When the time was right to tinker around, I thought of a dataset I've been collecting for some time now, which is the smart energy meter we have for our house.

And with some tinkering to get Prophet to play nice with my containers and Jupyter I had my first prediction in a few minutes:

![energy-prediction.png](/img/energy-prediction.png)

This makes me wonder if I could just pay the predicted amount instead of a fixed fee... but that's probably not feasible on the provider side. Other datasets that I might look at: amount of calendar items (to predict future busy-ness), activity or heart-rate (could I really?). Or maybe parking fines prediction? I got a sample dataset of a year of parking fines, mmh?