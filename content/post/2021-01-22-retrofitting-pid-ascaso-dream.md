---
title: "2021 01 22 Retrofitting Pid Ascaso Dream"
date: 2021-01-22T12:29:55+01:00
draft: true

# Tags and categories
tags: ["coffee", "ascaso", "PID"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology",] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

I've owned a old Ascaso Dream for quite a few years. Bought it broken, repaired it and I kept it in a reasonable state. Last month the temperature gauge broke and while I could replace it, I figured I would retrofit a PID controller with it. The newer models do include a PID controller, but the way it's build in is just plain ugly. 

The retrofit would work with a Solid State Relay as the wattage it would be switching would by quite high. As for the controller, I opted for a Wemos D1 Mini, as it would just have enough pins to support:

1.  The solid state relay for switchting the heating element.
2.  A DS18B20 temperature sensor (this fit right on to the boiler!)
3.  A small OLED screen with I2C that would fit in the rounded enclosure.
4.  Three buttons that would provide the main interface to configure the PID parameters and temperature.

Since the entire body of the Ascaso is of cast iron I haven't tested the wi-fi of the wemo, but I might be able to log the temperature curve for each brew as well, ha! 

Retrofitting the Ascaso Dream with a PID does mean we need to mount extra electronics on the inside of the case, for which I designed a 3D printed bracked that would fit right into the Ascaso and mount with a M4 screw on a tapped thread on the inside. 

I also designed a PCB for the Wemo D1 Mini and connectors for the sensors, screen and power. There are still some things I might want to fix in the next version, as the 230V lines are not seperated from the 5V on the PCB yet, this would further ensure safety of the electronics.

To house the screen in the circle on the front I printed two custom objects that would fit the OLED screen and the buttons. Both objects fit together and can be mounted without modifying anything on the Ascaso itself. 

With everything wired up, the only thing left is software to run the PID and all it's peripherals. I've put all the code in a Github repository if you're curious. Looking at the total costs of the retrofit, it shouldn't cost more then 50 euro's total, which is quite cheap compared to a new model! 