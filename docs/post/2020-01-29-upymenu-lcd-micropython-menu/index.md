---
title: "Micropython LCD menu: upymenu"
date: 2020-01-28
categories: ["python"]
tags: ["development","code","python","developer"]
url: https://jplattel.nl/post/2020-01-29-upymenu-lcd-micropython-menu/
---


I've published my first library to [PyPi](https://pypi.org/project/upymenu/)! It is a simple utility function you can use in micropython to build menus for LCD displays. I was used to the [Liquid Crystal](https://github.com/arduino-libraries/LiquidCrystal) and [Liquid Menu](https://github.com/VaSe7u/LiquidMenu) while developing on an Arduino. 

When I made the switch towards micropython I saw no such thing existed. But having a [statemachine](https://www.wikiwand.com/en/Finite-state_machine) like menu is quite easy in Python and I wanted to abstract it a bit into a library, this way it is easier to use for other people! 

Once you have configured your LCD with your board, you can use it like this to create a menu:

```python
from machine import Pin, I2C # Basics for creating an LCD interface
from esp8266_i2c_lcd import I2cLcd # Example LCD interface used
from upymenu import Menu, MenuAction, MenuNoop

def action_callback():
    print("callback action chosen")

submenu = Menu("Submenu")
submenu_action_1 = MenuAction("Submenu Action", callback=action_callback)
submenu_action_2 = MenuAction("Submenu Action 1", callback=action_callback)
submenu.add_option(submenu_action_1)
submenu.add_option(submenu_action_2)

menu_action = MenuAction("Action", callback=action_callback)
menu = Menu("Main Menu")
menu.add_option(submenu)
menu.add_option(menu_action)
menu.add_option(MenuNoop("Nothing here"))

# Example config for LCD via i2c, you will need this 
# for the menu to function, the screen size is required
# to render the menu correctly on the screen.
i2c = I2C(scl=Pin(5), sda=Pin(4), freq=400000)
lcd = I2cLcd(i2c, 0x3F, 4, 20)

current_menu = menu.start(lcd) # Starts the menu on the LCD
```

Have a look at the [github repository](https://github.com/jplattel/upymenu) and feel free to do any suggestions with a new issue! 
