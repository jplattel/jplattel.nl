---
title: "Easy configuration for Circuit Python devices"
date: 2024-02-15T20:36:24+01:00
draft: false

# Tags and categories
tags: ["esp32", "circuitpython", "web-serial", "javascript"] # Example: `tags: ["machine-learning", "deep-learning"]`
categories: ["technology"] # Example: `catagories: ["machine-learning", "deep-learning"]`
---

While developing the [OV Klok](https://jplattel.nl/project/ov-klok/) I've been exploring how small trinkets and other technological utilities can be configured. Most of the time, it's either trough a [captive portal](https://www.wikiwand.com/en/Captive_portal), a self-served webserver or editing a configuration file. Both options aren't really user friendly to me... 

- The captive portal is fails at times and doesn't really work if you have a custom network configuration. 
- The self served webpage requires a user to type in an address or IP, that's only accessible in a specific mode..
- The configuration file is prone to errors and requires a user to edit a text file with an editor that they might not be comfortable with.

---

## Web serial to the rescue

For a simple device like the OV Klok a user only needs to configure the device once and I wanted it to be as fool proof as possible while being user-friendly too! I solved this with the power of [Web Serial](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API). This allows a user to connect with a serial port through a webbrowser. 

How does this work with Circuit Python you might ask? Well opening a serial port gives you back a [REPL](https://www.wikiwand.com/en/Read%E2%80%93eval%E2%80%93print_loop). This allows you to actually type python code that will get executed. Knowing this it's pretty easy to gobble together part javascript and part python to make it work. 

## Step by step

1.  A user connects the device to configure witha USB cable to their computer
2.  The user navigate to the webpage for configuration and presses a `connect` button and selects the device to configure
3.  A serial port is opened and a form is presented to the user in the webpage with configuration options
4.  The user configures the device with the form, once `save` is pressed javascript validates the data and creates python code that is sent to the REPL that's open.
5.  The REPL evaluates the code and runs it. The code includes a part that will create a configuration file on the circuit python device.
6.  Once done the REPL will reboot the device automatically with: `import microcontroller; microcontroller.reset()`.
7.  The device is rebooted and will automatically pick up the configuration and run the code that's on it.

## Javascript example (pseudo) code

Below you'll find pieces of JS that I've used:

```js
// Open a serial port
port = await navigator.serial.requestPort();
await port.open({ baudRate: 115200 }); 

// Get a writer to write to the serial port
writer = await port.writable.getWriter();

// Lines to write (\r\n is all because of the whitespacing...) 
lines = [
    `\r\nimport storage\r\n`,
    `\r\nstorage.remount("/", False)\r\n`,
    `\r\nwith open("/test.txt", 'w') as file:\r\n`,
    `   file.write('hello')\r\n\r\n`,
    `   file.flush()\r\n`,
    `\r\n\r\n`,
    `\r\nstorage.remount("/", True)\r\n`,
]

// For each line, encode it and send it to the writer
for (let index = 0; index < lines.length; index++) {
    await writer.ready;
    let data = new TextEncoder().encode(lines[index]);
    writer.write(data)
}
```

There's one condition for this to work: The USB functionality of Circuit Python needs to be disabled with the following in `boot.py` on the Circuit Python device itself:

```python
import storage

storage.disable_usb_drive()
```

The upside, you don't confuse people with having a drive device show up in explorer or finder. I think this is superior for setting up a device compared to the three methods mentioned above.